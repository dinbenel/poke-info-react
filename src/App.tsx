import { Routes, Route } from 'react-router-dom';
import { routes } from './Routes/routes';
import { Header } from './components';

function App() {
  return (
    <div className='dark'>
      <Header />
      <main className='bg-foreground min-h-[89dvh]'>
        <Routes>
          {routes.map(({ element: Component, path }) => {
            return <Route path={path} element={<Component />} key={path} />;
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
