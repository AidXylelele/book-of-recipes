import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button, Container, Typography } from '@mui/material';
import { Input } from '../../input/input.component';
import { registerValues } from '../../../consts/initial-values.forms';
import { useMutation, useQueryClient } from 'react-query';
import { IUser } from '../../../types/user.types';
import { userService } from '../../../../services/user.service';
import { QUERY_KEYS } from '../../../consts/app-keys.const';
import { useNavigate } from 'react-router-dom';
import { APP_KEYS } from '../../../consts';
import { SPACES } from '../../../../theme';
import { SIZES } from '../../../../theme/fonts.const';
import { registerSchema } from '../../../../validation/register-validation';

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createUser = useMutation({
    mutationFn: async (user: IUser) => {
      const token = await userService.createUser(user);
      localStorage.setItem('token', token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PROFILE]);
      navigate(APP_KEYS.ROUTER_KEYS.RECIPES);
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: '100vh',
          padding: `${SPACES.l} ${SPACES.s}`,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: '#F5F5F5',
            padding: `${SPACES.s}`,
            borderRadius: `${SPACES.s}`,
          }}
        >
          <Typography
            align="center"
            sx={{ margin: `${SPACES.m} 0`, fontSize: SIZES.l }}
          >
            Login to ToDo
          </Typography>
          <Formik
            initialValues={registerValues}
            validationSchema={registerSchema}
            validateOnChange
            validateOnBlur
            onSubmit={(values) => {
              const { email, name, avatar, password } = values;
              const newUser = { email, name, avatar, password };
              createUser.mutate(newUser);
            }}
          >
            {() => (
              <Form>
                <Input name="email" label="Email" />
                <Input name="name" label="Name" />
                <Input name="avatar" label="Your avatar" />
                <Input name="password" label="Password" />
                <Input name="passwordConfirmation" label="Confirm password" />
                <Box sx={{ margin: `${SPACES.m} 0` }}>
                  <Button type="submit" fullWidth variant="contained">
                    Sign Up
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
