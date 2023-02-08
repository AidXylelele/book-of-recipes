import React from "react";
import {
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";

interface IProps {
  Component: React.FC;
}

export const Header: React.FC<IProps> = ({Component}) => {
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Recipes
        </Typography>
        <Component/>
      </Toolbar>
    </AppBar>
  );
};
