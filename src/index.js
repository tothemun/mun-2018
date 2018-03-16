import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { configureStore } from './stores';
import './styles/index.css';

ReactDOM.render(
  <Provider store={configureStore}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
