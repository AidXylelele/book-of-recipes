import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { ITodo } from '../../types/todo.types';
import { useTodos } from '../../../hooks/useTodos';
import TodoList from './todo-list';

export const TodoListContainer: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[] | null>(null);
  const { values } = useTodos();

  useEffect(() => {
    if (values) setTodos(values);
  }, [values, setTodos]);

  if (todos) {
    return <TodoList todos={todos} />;
  }
  return <LinearProgress />;
};
