import { useAppContext } from '@/providers/RootStore.provider';
import { toJS } from 'mobx';

const PokemonDetails = () => {
  const { pokemonStore } = useAppContext();
  console.log(toJS(pokemonStore.selectedPokemon));
  return <div>PokemonDetails</div>;
};

export default PokemonDetails;
