import React from 'react';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { APP_KEYS } from '../../consts';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const todoFormNavigation = () => navigate(`${ROUTER_KEYS.TODO}/${ROUTER_KEYS.NEW}`);
  const profileNavigation = () => navigate(APP_KEYS.ROUTER_KEYS.PROFILE);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TODOS
        </Typography>
        <ButtonGroup variant="contained" color="success">
          <Button onClick={() => todoFormNavigation()}>New Todo</Button>
          <Button onClick={() => profileNavigation()}>My Profile</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
