import React from 'react';
import { Switch, Button, ButtonGroup, LinearProgress, Typography } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../common/types/todo.types';
import { todoService } from '../../services/todo.service';
import { QUERY_KEYS, ROUTER_KEYS } from '../../common/consts/app-keys.const';
import { Box, Stack } from '@mui/system';
import { TodoActionsStyles } from './todo-actions.styled';
import { useTodo } from '../../hooks/todo-hooks';

interface ITodoActionProps {
  id?: string;
}

const TodoActions: React.FC<ITodoActionProps> = (props) => {
  const { id } = props;
  const { value: todo } = useTodo(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteTodo = useMutation({
    mutationFn: (_id: string) => todoService.deleteTodo(_id),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
    }
  });

  const updateTodo = useMutation({
    mutationFn: (updates: ITodo) => todoService.updateTodo(updates),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
      await queryClient.invalidateQueries([QUERY_KEYS.TODO]);
    }
  });

  const viewHandler = (todoId: string | undefined) => {
    navigate(`${ROUTER_KEYS.TODO}/${todoId}`);
  };

  if (id && todo) {
    return (
      <Box sx={TodoActionsStyles.container}>
        <ButtonGroup>
          <Button onClick={() => viewHandler(id)}>View</Button>
          <Button onClick={() => deleteTodo.mutate(id)}>Delete</Button>
        </ButtonGroup>
        <Stack direction="row" gap={3}>
          <Typography variant="h6">Completed:</Typography>
          <Switch
            checked={todo.isDone}
            color="warning"
            onChange={() => {
              updateTodo.mutate({ ...todo, isDone: !todo.isDone });
            }}
          />
        </Stack>
        <Stack direction="row" gap={3}>
          <Typography variant="h6">Private:</Typography>
          <Switch
            checked={todo.isPrivate}
            color="success"
            onChange={() => {
              updateTodo.mutate({ ...todo, isPrivate: !todo.isPrivate });
            }}
          />
        </Stack>
      </Box>
    );
  }
  return <LinearProgress />;
};

export default TodoActions;
