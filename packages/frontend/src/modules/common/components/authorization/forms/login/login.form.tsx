import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { Container, Title, FromItemsContainer } from '../form.styled';
import { loginSchema } from '../../../../../validation/login-validation';

export const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'Hello'
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Container>
      <Title>Login</Title>
      <form onSubmit={formik.handleSubmit}>
        <FromItemsContainer>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </FromItemsContainer>
      </form>
    </Container>
  );
};
