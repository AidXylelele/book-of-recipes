import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const viewHandler = () => navigate(`${ROUTER_KEYS.TODO}/${ROUTER_KEYS.NEW_TODO}`);
  return (
    <ButtonGroup variant="text" color="primary">
      <Button onClick={() => viewHandler()}>New Todo</Button>
      <Button>My Profile</Button>
    </ButtonGroup>
  );
};
