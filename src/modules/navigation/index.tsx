import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { APP_KEYS } from "../common/consts";
import { TodoDetails } from "../todo/detailed/todo-detailed";
import { LoginPage } from "../common/components/forms/login/login.form";
import { HomePage } from "../home";
import { RegisterForm } from "../common/components/forms/register/register.form";
import { ProfileContainer } from "../profile/profile.container.component";
import TodoList from "../todo/todo-list";
import { ProductsList } from "../products/products-list";
import { ProductForm } from "../common/components/forms/product/product-form";

export const MainRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route element={<LoginPage />} path={APP_KEYS.ROUTER_KEYS.LOGIN} />
      <Route element={<RegisterForm />} path={APP_KEYS.ROUTER_KEYS.REGISTER} />
      <Route element={<HomePage />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route element={<TodoList />} path={APP_KEYS.ROUTER_KEYS.TODOS} />
      <Route
        element={<TodoDetails />}
        path={`${APP_KEYS.ROUTER_KEYS.TODO}/:id`}
      />
      <Route
        element={<ProductForm />}
        path={`${APP_KEYS.ROUTER_KEYS.PRODUCTS}${APP_KEYS.ROUTER_KEYS.NEW}`}
      />
      <Route element={<ProductsList />} path={APP_KEYS.ROUTER_KEYS.PRODUCTS} />
      <Route
        element={<ProfileContainer />}
        path={APP_KEYS.ROUTER_KEYS.PROFILE}
      />
    </Routes>
  </Router>
);
