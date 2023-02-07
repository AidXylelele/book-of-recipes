import React from 'react';
import { ITodo } from '../../common/types/todo.types';
import TodoActions from '../actions/todo-actions';
import { Card, CardActions, CardContent, Typography } from '@mui/material';


interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { todo } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {todo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {todo.data}
        </Typography>
      </CardContent>
      <CardActions>
        <TodoActions id={todo._id} />
      </CardActions>
    </Card>
  );
};

export default TodoItem;
