import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/category-hooks";
import { Skeleton } from "antd";

export const RecipesDetailed = () => {
  const { id } = useParams();
  const { value } = useCategory(id!);

  if (value) {
    return (
      <Card sx={{ maxWidth: 500 }}>
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
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
  }
  return <Skeleton />;
};
