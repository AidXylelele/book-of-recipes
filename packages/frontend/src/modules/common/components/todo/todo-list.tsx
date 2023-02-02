import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { ITodo } from '../../types/todo.types';
import { Container } from './todo-list.styled';
import TodoItem from './element/todo-element';
import TodoActions from './actions/todo-actions';
import { Header } from './header/header';

interface ITodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { todos } = props;

  return (
    <Container>
      <Header />
      {window.innerWidth > 450 && window.innerWidth < 1000 && (
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }}
          pagination
          style={{ width: '100%' }}
        >
          {todos.map((item: ITodo) => (
            <SwiperSlide key={item._id}>
              <TodoItem todo={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {(window.innerWidth < 450 || window.innerWidth > 1000) && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo) => (
                <TableRow
                  key={todo.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {todo.title}
                  </TableCell>
                  <TableCell align="right">{todo.data}</TableCell>
                  <TableCell align="right">
                    <TodoActions id={todo._id!} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default TodoList;
