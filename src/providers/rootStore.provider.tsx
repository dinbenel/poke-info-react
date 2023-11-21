import { RootStore, rootStore } from '@/store/root.store';
import { ReactNode, createContext, useContext } from 'react';

export const RootContext = createContext({} as RootStore);

const RootContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RootContext.Provider value={rootStore}>{children}</RootContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(RootContext);
};

export default RootContextProvider;
