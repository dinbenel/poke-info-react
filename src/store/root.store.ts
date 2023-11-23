import AuthStore from './auth.store';
import PokemonStore from './pokemon.store';

export class RootStore {
  authStore: AuthStore;
  pokemonStore: PokemonStore;

  constructor() {
    this.authStore = new AuthStore();
    this.pokemonStore = new PokemonStore();
  }
}

export const rootStore = new RootStore();
