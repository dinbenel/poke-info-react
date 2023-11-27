import { IPokemon } from '@/types/pokemon.type';
import PokemonCard from '../PokemonCard/PokemonCard.component';

type Props = {
  pokemon: IPokemon[];
};

const PokemonPreview = ({ pokemon }: Props) => {
  return (
    <section className='grid grid-cols-5 w-full gap-4 justify-items-center items-center'>
      {pokemon.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} key={pokemon._id} />;
      })}
    </section>
  );
};

export default PokemonPreview;
