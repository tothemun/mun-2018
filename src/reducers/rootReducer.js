import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import mediaReducer from './mediaReducer';
import postReducer from './postReducer';

export default combineReducers({
  routing: routerReducer,
  mediaReducer,
  postReducer
});
