import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, LinearProgress } from '@mui/material';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';
import TodoActions from '../actions/todo-actions';
import { useTodo } from '../../../../hooks/useTodo';

export const TodoDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { value: todo } = useTodo(id);
  const backHandler = () => {
    navigate(`${ROUTER_KEYS.ROOT}`);
  };

  if (todo) {
    return (
      <Card sx={{ maxWidth: 750 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {todo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {todo.data}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <TodoActions id={todo._id!} />
          <Button
            size="small"
            color="primary"
            onClick={() => {
              backHandler();
            }}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    );
  }
  return <LinearProgress />;
};
