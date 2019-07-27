import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AnotherPage from './pages/AnotherPage';
import IndexPage from './pages/IndexPage';
import './styles/style.scss';
import FormsPage from './pages/FormsPage';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route component={IndexPage} path="/" exact />
        <Route component={FormsPage} path="/forms" />
        <Route component={AnotherPage} path="/another" />
      </BrowserRouter>
    </Provider>
  );
}

export default App