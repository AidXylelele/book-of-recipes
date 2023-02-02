import React from 'react';
import { ITodo } from '../../../types/todo.types';
import { ItemContainer, ItemDescription, ItemTitle } from './todo-element.styled';
import TodoActions from '../actions/todo-actions';

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { todo } = props;
  return (
    <ItemContainer>
      <ItemTitle>{todo.title}</ItemTitle>
      <ItemDescription>{todo.data}</ItemDescription>
      <TodoActions id={todo._id} />
    </ItemContainer>
  );
};

export default TodoItem;
