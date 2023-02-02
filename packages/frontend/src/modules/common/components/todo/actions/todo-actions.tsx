import React from 'react';
import { Switch, Button, ButtonGroup, LinearProgress } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../../types/todo.types';
import { todoService } from '../../../../services/todo.service';
import { QUERY_KEYS, ROUTER_KEYS } from '../../../consts/app-keys.const';
import { useTodo } from '../../../../hooks/useTodo';

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
      <ButtonGroup>
        <Button onClick={() => viewHandler(id)}>View</Button>
        <Button onClick={() => deleteTodo.mutate(id)}>Delete</Button>
        <Switch
          checked={todo.isDone}
          color="warning"
          onChange={() => {
            updateTodo.mutate({ ...todo, isDone: !todo.isDone });
          }}
        />
      </ButtonGroup>
    );
  }
  return <LinearProgress />;
};

export default TodoActions;
