import { PokemonApi } from '@/api/pokemon.api';
import { Pokemon } from '@/types/pokemon.type';
import { observable, makeObservable, action, runInAction } from 'mobx';
import AuthStore from './auth.store';
import { RootStore } from './root.store';

class PokemonStore {
  pokemon: Pokemon[] = [];
  pokemonApi: PokemonApi;

  constructor() {
    this.pokemonApi = new PokemonApi();
    makeObservable(this, {
      pokemon: observable,
      getAllPokemon: action,
    });
  }
  async getAllPokemon() {
    try {
      const { data } = await this.pokemonApi.getAllPokemon();
      runInAction(() => {
        this.pokemon = data;
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default PokemonStore;
