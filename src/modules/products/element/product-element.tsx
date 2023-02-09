import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Skeleton,
  Typography,
} from '@mui/material';
import { IProduct } from '../../common/types/product.types';
import { useCategory } from '../../hooks/category-hooks';
import { ProfileStyles } from '../../profile/profile.styled';
import { ProductActions } from '../actions/product-actions';
import { Stack } from '@mui/system';

const ProductItem: React.FC<IProduct> = ({ _id, title, amount, category }) => {
  const { isLoading, value } = useCategory(category);
  if (isLoading)
    return (
      <Skeleton
        animation="wave"
        sx={{ minWidth: 345, minHeight: 345, margin: 3 }}
      />
    );
  return (
    <Card sx={{ minWidth: 345, margin: 3 }}>
      <CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={ProfileStyles.media}
            image={value.avatar}
            alt="green iguana"
          />
        </CardActionArea>
        <Stack direction="column" gap={2} margin={2}>
          <Divider>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
          </Divider>
          <Typography variant="body2" color="text.secondary">
            Amount: <Chip label={amount} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {<Chip label={value.title} />}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <ProductActions id={_id!} amount={amount} />
      </CardActions>
    </Card>
  );
};

export default ProductItem;
