import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { ProfileStyles } from "../../profile/profile.styled";
import { useRecipe } from "../../hooks/recipe-hooks";

interface IProps {
  id: string;
}

const RecipeItem: React.FC<IProps> = ({ id }) => {
  const {
    isLoading,
    value,
  } = useRecipe(id);

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
        <Button color="primary"></Button>
      </CardActions>
    </Card>
  );
};

export default RecipeItem;
