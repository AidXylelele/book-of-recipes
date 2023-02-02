import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { ITodo } from '../common/types/todo.types';
import { Container } from './todo-list.styled';
import TodoItem from './element/todo-element';
import TodoActions from './actions/todo-actions';
import { Header } from '../common/components/header/header';
import { useTodos } from '../hooks/useTodos';
import { RadioChangeEvent } from 'antd';
import { Navigate } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import FilterButtons from './filters/filters.component';

const TodoList: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const { isLoading, values } = useTodos(filter, search);

  const filterHandler = ({ target: { value } }: RadioChangeEvent) => {
    setFilter(value);
  };

  const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  if (isLoading) {
    return <LinearProgress />;
  }

  if (values) {
    return (
      <Container>
        <Header />
        <FilterButtons
          value={filter}
          changeHandler={filterHandler}
          search={search}
          onChange={searchHandler}
        />
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
            {values.map((item: ITodo) => (
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
                  <TableCell>
                    <Typography variant="h6">Title</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">Description</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">Actions</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {values.map((todo: ITodo) => (
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
  }
  return <Navigate to={APP_KEYS.ROUTER_KEYS.ROOT} />;
};

export default TodoList;
