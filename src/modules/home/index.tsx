import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { HomePageStyles } from './home.styled';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} sx={HomePageStyles.imgCard} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={HomePageStyles.formContainer}>
          <Avatar sx={HomePageStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={HomePageStyles.buttonContainer}>
            <Button
              type="submit"
              onClick={() => navigate('/login')}
              fullWidth
              variant="contained"
              sx={HomePageStyles.button}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Button
                  type="submit"
                  onClick={() => navigate('/register')}
                  fullWidth
                  variant="contained"
                  sx={HomePageStyles.button}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
