import { PokemonApi } from '@/api/pokemon.api';
import { observable, makeObservable, action, runInAction } from 'mobx';
import { IPokemon } from '@/types/pokemon.type';

class PokemonStore {
  pokemon: IPokemon[] = [];
  selectedPokemon: IPokemon | null = null;
  pokemonApi: PokemonApi;
  loading: boolean = false;

  constructor() {
    this.pokemonApi = new PokemonApi();
    makeObservable(this, {
      pokemon: observable,
      selectedPokemon: observable,
      loading: observable,
      getAllPokemon: action,
      setSelectedPokemon: action,
    });
  }
  async getAllPokemon() {
    this._setLoading(true);
    try {
      const { data } = await this.pokemonApi.getAllPokemon();
      runInAction(() => {
        this.pokemon = data;
      });
    } catch (error) {
      console.log(error);
    } finally {
      this._setLoading(false);
    }
  }
  setSelectedPokemon(pokemon: IPokemon) {
    this.selectedPokemon = pokemon;
  }
  private _setLoading(loading: boolean) {
    runInAction(() => {
      this.loading = loading;
    });
  }
}

export default PokemonStore;
