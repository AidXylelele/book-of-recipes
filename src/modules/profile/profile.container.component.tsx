import React from 'react';
import { useProfile } from '../hooks/profile-hooks.ts';
import { Box, CircularProgress } from '@mui/material';
import { ProfilePage } from './profile.component';
import { Navigate } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';

export const ProfileContainer = () => {
  const { isLoading, value } = useProfile();
  if (value) return <ProfilePage name={value.name} avatar={value.avatar} />;
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  return <Navigate to={APP_KEYS.ROUTER_KEYS.ROOT}/>;
};
