import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../common/consts/app-keys.const";
import { APP_KEYS } from "../../common/consts";

export const RecipesHeaderButtons = () => {
  const navigate = useNavigate();
  const productNavigation = () =>
    navigate(`${ROUTER_KEYS.RECIPES}/${ROUTER_KEYS.NEW}`);
  const profileNavigation = () => navigate(APP_KEYS.ROUTER_KEYS.PROFILE);

  return (
    <ButtonGroup variant="contained" color="success">
      <Button onClick={() => productNavigation()}>My products</Button>
      <Button onClick={() => profileNavigation()}>My Profile</Button>
    </ButtonGroup>
  );
};
