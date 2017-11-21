import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const initialState = {};
const enhancer = compose(applyMiddleware(thunk));

const configureStore = createStore(rootReducer, initialState, enhancer);

export default configureStore;
