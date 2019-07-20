import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AnotherPage from './pages/AnotherPage';
import IndexPage from './pages/IndexPage';
import './styles/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route component={IndexPage} path="/" exact />
      <Route component={AnotherPage} path="/another" />
    </BrowserRouter>
  );
}

export default App