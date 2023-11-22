import { Routes, Route } from 'react-router-dom';
import { routes } from './Routes/routes';
import { Header } from './components';
import RootContextProvider from './providers/rootStore.provider';

function App() {
  return (
    <>
      <Header />
      <main>
        <RootContextProvider>
          <Routes>
            {routes.map(({ element, path }) => {
              return <Route path={path} element={element()} key={path} />;
            })}
          </Routes>
        </RootContextProvider>
      </main>
    </>
  );
}

export default App;
