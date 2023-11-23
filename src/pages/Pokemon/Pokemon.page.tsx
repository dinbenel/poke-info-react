import { useAppContext } from '@/providers/RootStore.provider';
import { useObserver } from 'mobx-react';
import { useEffect } from 'react';

const Pokemon = () => {
  const { pokemonStore } = useAppContext();
  useEffect(() => {}, []);

  return <div>pokemon</div>;
};

export default Pokemon;
