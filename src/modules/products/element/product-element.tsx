import React from "react";
import TodoActions from "../actions/todo-actions";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { IProduct } from "../../common/types/product.types";
import { useCategory } from "../../hooks/category-hooks.ts";
import { ProfileStyles } from "../../profile/profile.styled";

const ProductItem: React.FC<IProduct> = ({ _id, title, amount, category }) => {
  const { isLoading, value } = useCategory(category);
  if (isLoading)
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={ProfileStyles.media}
            image={value.avatar}
            alt="green iguana"
          />
        </CardActionArea>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {amount}
        </Typography>
      </CardContent>
      <CardActions>
        <TodoActions id={_id} />
      </CardActions>
    </Card>
  );
};

export default ProductItem;