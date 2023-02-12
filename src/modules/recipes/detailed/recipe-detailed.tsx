import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Box,
  CardActionArea,
  CardActions,
  Chip,
  Container,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Divider } from 'antd';
import { useRecipe } from '../../hooks/recipe-hooks';
import { ICreateProduct } from '../../common/types/product.types';
import { RecipeActions } from '../actions/recipe-actions';
import { Preloader } from '../../common/components/preloader/preloader';

export const RecipesDetailed = () => {
  const { id } = useParams();
  const { isLoading, value } = useRecipe(id!);

  if (isLoading) return <Preloader />;

  return (
    <Container
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Card sx={{ minWidth: 500, margin: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={value.photoLink}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {value.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value.description}
            </Typography>
            <Divider>
              <Typography variant="body2" color="InfoText">
                Products:
              </Typography>
            </Divider>
            <Box>
              {value.products.map((item: ICreateProduct, idx: number) => (
                <Chip key={idx} label={item.title} />
              ))}
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <RecipeActions id={id!} />
        </CardActions>
      </Card>
    </Container>
  );
};
