import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { LoginPage } from '../common/components/forms/login/login.form';
import { HomePage } from '../home';
import { RegisterForm } from '../common/components/forms/register/register.form';
import { ProfileContainer } from '../profile/profile.container.component';
import { ProductsList } from '../products/products-list';
import { ProductForm } from '../common/components/forms/product/product-form';
import RecipeList from '../recipes/recipe-list';
import { RecipeForm } from '../common/components/forms/recipe/recipe-form';
import { RecipesDetailed } from '../recipes/detailed/recipe-detailed';

export const MainRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route element={<LoginPage />} path={APP_KEYS.ROUTER_KEYS.LOGIN} />
      <Route element={<RegisterForm />} path={APP_KEYS.ROUTER_KEYS.REGISTER} />
      <Route element={<HomePage />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route
        element={<ProductForm />}
        path={`${APP_KEYS.ROUTER_KEYS.PRODUCTS}${APP_KEYS.ROUTER_KEYS.NEW}`}
      />
      <Route element={<ProductsList />} path={APP_KEYS.ROUTER_KEYS.PRODUCTS} />
      <Route
        element={<RecipeForm />}
        path={`${APP_KEYS.ROUTER_KEYS.RECIPES}${APP_KEYS.ROUTER_KEYS.NEW}`}
      />
      <Route element={<RecipeList />} path={APP_KEYS.ROUTER_KEYS.RECIPES} />
      <Route
        element={<ProfileContainer />}
        path={APP_KEYS.ROUTER_KEYS.PROFILE}
      />
      <Route
        element={<RecipesDetailed />}
        path={`${APP_KEYS.ROUTER_KEYS.RECIPES}${APP_KEYS.ROUTER_KEYS.DETAILED}`}
      />
    </Routes>
  </Router>
);
