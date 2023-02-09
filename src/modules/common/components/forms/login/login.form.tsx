import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { IUserSignIn } from '../../../types/user.types';
import { SPACES } from '../../../../theme';
import { SIZES } from '../../../../theme/fonts.const';
import { QUERY_KEYS } from '../../../consts/app-keys.const';
import { Input } from '../../input/input.component';
import { userService } from '../../../../services/user.service';
import { APP_KEYS } from '../../../consts';
import { loginValues } from '../../../consts/initial-values.forms';
import { FormStyles } from '../form.styled';
import { loginSchema } from '../../../../validation/login-validation';

export const LoginPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const loginUser = useMutation({
    mutationFn: async (user: IUserSignIn) => {
      const token = await userService.loginUser(user);
      localStorage.setItem('token', token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PROFILE]);
      navigate(APP_KEYS.ROUTER_KEYS.RECIPES);
    },
  });

  return (
    <Container maxWidth="sm">
      <Box sx={FormStyles.mainBox}>
        <Box sx={FormStyles.childBox}>
          <Typography
            align="center"
            sx={{ margin: `${SPACES.m} 0`, fontSize: SIZES.l }}
          >
            Login to ToDo
          </Typography>
          <Formik
            initialValues={loginValues}
            validationSchema={loginSchema}
            validateOnChange
            validateOnBlur
            onSubmit={(values) => {
              loginUser.mutate(values);
            }}
          >
            {() => (
              <Form>
                <Input name="email" label="Email" />
                <Input name="password" label="Password" />
                <Box sx={FormStyles.button}>
                  <Button type="submit" fullWidth variant="contained">
                    Login
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
};
