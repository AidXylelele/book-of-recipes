import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { TodoListContainer } from '../common/components/todo/todo-list.container';
import { TodoDetails } from '../common/components/todo/detailed/todo-detailed';
import { TodoForm } from '../common/components/todo/form/todo-form';

export const MainRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route element={<TodoListContainer />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route element={<TodoDetails />} path={`${APP_KEYS.ROUTER_KEYS.TODO}/:id`} />
      <Route
        element={<TodoForm />}
        path={`${APP_KEYS.ROUTER_KEYS.TODO}/${APP_KEYS.ROUTER_KEYS.NEW_TODO}`}
      />
    </Routes>
  </Router>
);
