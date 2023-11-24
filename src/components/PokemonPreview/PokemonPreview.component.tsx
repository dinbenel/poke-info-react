import { IPokemon } from '@/types/pokemon.type';
import PokemonTypeTag from '../PokemonTypeTag/PokemonTypeTag.component';

type Props = {
  pokemon: IPokemon[];
};

const PokemonPreview = ({ pokemon }: Props) => {
  return (
    <section className='grid grid-cols-5 w-full gap-4 justify-items-center items-center'>
      {pokemon.map(({ name, sprites, _id, types }) => {
        const typeCount = types.length;

        return (
          <article
            key={_id}
            className='bg-background/10 w-full text-background rounded-lg'
          >
            <h3 className='text-center font-medium text-xl capitalize tracking-wider p-2'>
              {name}
            </h3>
            <div>
              <img src={sprites.front_default} alt={name} />
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
      })}
    </section>
  );
};

export default PokemonPreview;
