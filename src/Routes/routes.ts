import { routeName } from '@/constants/routeNames';
import { Home, Login, Pokemon, Register } from '@/pages';

export const routes = [
  {
    path: routeName.home,
    element: Home,
  },
  {
    path: routeName.login,
    element: Login,
  },
  {
    path: routeName.register,
    element: Register,
  },
  {
    path: routeName.pokemon,
    element: Pokemon,
  },
];
