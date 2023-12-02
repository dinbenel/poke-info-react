import { httpClient } from '@/lib/http.client';
import { PokemonQueryParams } from '@/types/pokemon.type';
import { convertQueryParams } from '@/utils/helpers.utils';

export class PokemonApi {
  getAllPokemon(query?: PokemonQueryParams) {
    const queryStr = convertQueryParams<PokemonQueryParams>(query);
    return httpClient.client.get(`pokemon${queryStr}`);
  }
}
