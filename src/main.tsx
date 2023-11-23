import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import RootContextProvider from './providers/RootStore.provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootContextProvider>
        <App />
      </RootContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
