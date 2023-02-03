import React from "react";
import TodoActions from "../actions/todo-actions";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { IProduct } from "../../common/types/product.types";

const ProductItem: React.FC<IProduct> = (product) => {
  const { isLoading, value} = useCategory()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.amount}
        </Typography>
      </CardContent>
      <CardActions>
        <TodoActions id={product._id} />
      </CardActions>
    </Card>
  );
};

export default ProductItem;
