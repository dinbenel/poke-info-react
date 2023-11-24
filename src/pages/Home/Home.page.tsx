import { PokemonPreview } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';
import { useAppContext } from '@/providers/RootStore.provider';
import { observer } from 'mobx-react';
import { Suspense, useEffect } from 'react';

const Home = () => {
  const { pokemonStore } = useAppContext();
  useEffect(() => {
    pokemonStore.getAllPokemon();
  }, []);

  return (
    <section className='flex flex-col items-center justify-center container p-4 gap-10'>
      <h2 className='mt-4 text-3xl capitalize'>chose your favorite</h2>
      <Suspense fallback={<Skeleton />}>
        <PokemonPreview pokemon={pokemonStore.pokemon} />
      </Suspense>
    </section>
  );
};

export default observer(Home);
