import { APP_KEYS } from '.';
import { IHeaderButton } from '../types/header.types';

export const ProductsHeaderButtons: IHeaderButton[] = [
  {
    title: 'Add product',
    url: `${APP_KEYS.ROUTER_KEYS.PRODUCTS}${APP_KEYS.ROUTER_KEYS.NEW}`,
  },
  {
    title: 'Recipes',
    url: APP_KEYS.ROUTER_KEYS.RECIPES,
  },
  {
    title: 'Profile',
    url: APP_KEYS.ROUTER_KEYS.PROFILE,
  },
];

export const RecipesHeaderButtons: IHeaderButton[] = [
  {
    title: 'Create recipe',
    url: `${APP_KEYS.ROUTER_KEYS.RECIPES}${APP_KEYS.ROUTER_KEYS.NEW}`,
  },
  {
    title: 'Products',
    url: APP_KEYS.ROUTER_KEYS.PRODUCTS,
  },
  {
    title: 'Profile',
    url: APP_KEYS.ROUTER_KEYS.PROFILE,
  },
];

export const ProfileHeaderButtons: IHeaderButton[] = [
  {
    title: 'Recipes',
    url: APP_KEYS.ROUTER_KEYS.RECIPES,
  },
  {
    title: 'Products',
    url: APP_KEYS.ROUTER_KEYS.PRODUCTS,
  },
];
