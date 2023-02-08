import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../common/consts/app-keys.const";
import { APP_KEYS } from "../../common/consts";

export const ProductsHeaderButtons = () => {
  const navigate = useNavigate();
  const todoFormNavigation = () =>
    navigate(`${ROUTER_KEYS.RECIPES}/${ROUTER_KEYS.NEW}`);
  const profileNavigation = () => navigate(APP_KEYS.ROUTER_KEYS.PROFILE);

  return (
    <ButtonGroup variant="contained" color="success">
      <Button onClick={() => todoFormNavigation()}>New Todo</Button>
      <Button onClick={() => profileNavigation()}>My Profile</Button>
    </ButtonGroup>
  );
};
