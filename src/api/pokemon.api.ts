import { httpClient } from '@/lib/http.client';

export class PokemonApi {
  getAllPokemon() {
    return httpClient.client.get('pokemon');
  }
}
