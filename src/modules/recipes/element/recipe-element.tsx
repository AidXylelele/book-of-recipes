import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';
import { ProfileStyles } from '../../profile/profile.styled';
import { useRecipe } from '../../hooks/recipe-hooks';
import { useNavigate } from 'react-router-dom';
import { APP_KEYS } from '../../common/consts';

interface IProps {
  id: string;
}

const RecipeItem: React.FC<IProps> = ({ id }) => {
  const { isLoading, value } = useRecipe(id);

  const navigate = useNavigate();

  const viewHandler = () => {
    return navigate(`${APP_KEYS.ROUTER_KEYS.RECIPES}/${id}`);
  };

  if (isLoading)
    return (
      <Skeleton
        animation="wave"
        sx={{ maxWidth: 345, minHeight: 345, margin: 3 }}
      />
    );

  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={ProfileStyles.media}
            image={value.photoLink}
            alt="green iguana"
          />
        </CardActionArea>
        <Typography gutterBottom variant="h5" component="div">
          {value.title}
        </Typography>
        <Typography gutterBottom component="div">
          {value.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={viewHandler}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeItem;
