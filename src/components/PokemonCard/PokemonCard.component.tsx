import { IPokemon } from '@/types/pokemon.type';
import PokemonTypeTag from '../PokemonTypeTag/PokemonTypeTag.component';
import { useAppContext } from '@/providers/RootStore.provider';
import { useNavigate } from 'react-router-dom';
import { routeName } from '@/constants/routeNames';

type Props = {
  pokemon: IPokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const { name, sprites, types } = pokemon;
  const typeCount = types.length;
  const { pokemonStore } = useAppContext();
  const navigate = useNavigate();

  const setSelectedPokemon = () => {
    pokemonStore.setSelectedPokemon(pokemon);
    navigate(`${routeName.pokemon}/${pokemon._id}`);
  };

  return (
    <article
      className='bg-background/10 w-full text-background rounded-lg cursor-pointer'
      onClick={setSelectedPokemon}
    >
      <h3 className='text-center font-medium text-xl capitalize tracking-wider p-2'>
        {name}
      </h3>
      <div>
        <img
          src={sprites.front_default}
          alt={name}
          className='object-fill aspect-auto'
        />
      </div>
      <section
        className={`w-full flex p-4 items-center ${
          typeCount > 1 ? 'justify-between' : 'justify-center'
        }`}
      >
        <PokemonTypeTag types={types} />
      </section>
    </article>
  );
};

export default PokemonCard;
