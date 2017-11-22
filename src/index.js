import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { configureStore } from './stores';
import './styles/index.css';

ReactDOM.render(
  <Provider store={configureStore}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
