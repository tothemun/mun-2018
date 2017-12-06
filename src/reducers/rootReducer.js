import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import mediaReducer from './mediaReducer';
import pageReducer from './pageReducer';
import postReducer from './postReducer';

export default combineReducers({
  routing: routerReducer,
  mediaReducer,
  pageReducer,
  postReducer
});
