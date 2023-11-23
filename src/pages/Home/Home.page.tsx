import { useAppContext } from '@/providers/RootStore.provider';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

const Home = () => {
  const { pokemonStore } = useAppContext();
  useEffect(() => {
    pokemonStore.getAllPokemon();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {pokemonStore.pokemon.map((poke) => {
        return (
          <div className='text-slate-800' key={poke._id}>
            {poke.name}
          </div>
        );
      })}
    </div>
  );
};

export default observer(Home);
