import React from 'react';
import {
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IHeaderButton } from '../../types/header.types';


interface IProps {
  options: IHeaderButton[];
}

export const Header: React.FC<IProps> = ({ options }) => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TODOS
        </Typography>
        <ButtonGroup variant="contained" color="success">
          {options.map(({ title, url }: IHeaderButton) => (
            <Button onClick={() => navigate(url)}>{title}</Button>
          ))}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
