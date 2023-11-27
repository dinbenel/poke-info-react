import { routeName } from '@/constants/routeNames';
import { Home, Login, Pokemon, Register } from '@/pages';
import PokemonDetails from '@/pages/PokemonDetails/PokemonDetails.page';

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
  {
    path: `${routeName.pokemon}/:pokeId`,
    element: PokemonDetails,
  },
];
