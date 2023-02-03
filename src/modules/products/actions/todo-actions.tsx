import React from "react";
import {
  Switch,
  Button,
  ButtonGroup,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS, ROUTER_KEYS } from "../../common/consts/app-keys.const";
import { Box, Stack } from "@mui/system";
import { TodoActionsStyles } from "./todo-actions.styled";
import { useProduct } from "../../hooks/product-hooks";
import { productService } from "../../services/products.service";
import { IProduct } from "../../common/types/product.types";

interface ITodoActionProps {
  id?: string;
}

const TodoActions: React.FC<ITodoActionProps> = ({ id }) => {
  const { value } = useProduct(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteProduct = useMutation({
    mutationFn: (_id: string) => productService.deleteProduct(_id),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
    },
  });

  const updateProduct = useMutation({
    mutationFn: (updates: IProduct) => productService.updateProduct(updates),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      await queryClient.invalidateQueries([QUERY_KEYS.PRODUCT]);
    },
  });

  const viewHandler = (id: string | undefined) => {
    navigate(`${ROUTER_KEYS.PRODUCTS}/${id}`);
  };

  if (id && value) {
    return (
      <Box sx={TodoActionsStyles.container}>
        <ButtonGroup>
          <Button onClick={() => viewHandler(id)}>View</Button>
          <Button onClick={() => deleteProduct.mutate(id)}>Delete</Button>
        </ButtonGroup>
        <Stack direction="row" gap={3}>
          <Typography variant="h6">Completed:</Typography>
        </Stack>
        <Stack direction="row" gap={3}>
          <Typography variant="h6">Private:</Typography>
          {/* <Switch
            checked={todo.isPrivate}
            color="success"
            onChange={() => {
              updateProduct.mutate({ ...todo, isPrivate: !todo.isPrivate });
            }}
          /> */}
        </Stack>
      </Box>
    );
  }
  return <LinearProgress />;
};

export default TodoActions;
