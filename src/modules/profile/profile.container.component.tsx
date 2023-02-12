import React from 'react';
import { useProfile } from '../hooks/profile-hooks';
import { ProfilePage } from './profile.component';
import { Navigate } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { Preloader } from '../common/components/preloader/preloader';

export const ProfileContainer = () => {
  const { isLoading, value } = useProfile();
  if (value) return <ProfilePage name={value.name} avatar={value.avatar} />;
  if (isLoading) return <Preloader />;
  return <Navigate to={APP_KEYS.ROUTER_KEYS.ROOT} />;
};
