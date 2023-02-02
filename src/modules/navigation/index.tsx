import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { TodoDetails } from '../todo/detailed/todo-detailed';
import { TodoForm } from '../common/components/forms/todo/todo-form';
import { LoginPage } from '../common/components/forms/login/login.form';
import { HomePage } from '../home';
import { RegisterForm } from '../common/components/forms/register/register.form';
import { ProfileContainer } from '../profile/profile.container.component';
import TodoList from '../todo/todo-list';

export const MainRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route element={<LoginPage />} path={APP_KEYS.ROUTER_KEYS.LOGIN} />
      <Route element={<RegisterForm />} path={APP_KEYS.ROUTER_KEYS.REGISTER} />
      <Route element={<HomePage />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route element={<TodoList />} path={APP_KEYS.ROUTER_KEYS.TODOS} />
      <Route element={<TodoDetails />} path={`${APP_KEYS.ROUTER_KEYS.TODO}/:id`} />
      <Route
        element={<TodoForm />}
        path={`${APP_KEYS.ROUTER_KEYS.TODO}/${APP_KEYS.ROUTER_KEYS.NEW_TODO}`}
      />
      <Route element={<ProfileContainer />} path={APP_KEYS.ROUTER_KEYS.PROFILE} />
    </Routes>
  </Router>
);
