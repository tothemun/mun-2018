import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers/rootReducer';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

const initialState = {};

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  persistState(getDebugSessionKey())
);

const configureStore = createStore(rootReducer, initialState, enhancer);

export default configureStore;
