import { Routes, Route } from 'react-router-dom';
import { routes } from './Routes/routes';
import { Header } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {routes.map(({ element: Component, path }) => {
            return <Route path={path} element={<Component />} key={path} />;
          })}
        </Routes>
      </main>
    </>
  );
}

export default App;
