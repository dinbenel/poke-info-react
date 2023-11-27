import { PokemonPreview, PokemonPreviewLoader } from '@/components';
import { useAppContext } from '@/providers/RootStore.provider';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

const Home = () => {
  const { pokemonStore } = useAppContext();
  useEffect(() => {
    pokemonStore.getAllPokemon();
  }, []);

  return (
    <section className='flex flex-col items-center justify-center container p-4 gap-10'>
      <h2 className='mt-4 text-3xl capitalize'>chose your favorite</h2>
      {pokemonStore.loading ? (
        <PokemonPreviewLoader />
      ) : (
        <PokemonPreview pokemon={pokemonStore.pokemon} />
      )}
    </section>
  );
};

export default observer(Home);
