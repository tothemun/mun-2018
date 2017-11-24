import { merge } from 'lodash';
import {
  SET_POSTS,
  SET_POSTS_FETCHING,
  POSTS_ERROR
} from '../actions/types';
import { createReducer } from '_utils';

const initialState = {
  error: null,
  fetched: false,
  fetching: false,
  posts: []
};

export default createReducer(initialState, {
  [SET_POSTS]: (state, payload) => ({
    ...state,
    fetching: false,
    error: null,
    posts: payload
  }),
  [SET_POSTS_FETCHING]: (state) => ({
    ...state,
    fetching: true
  }),
  [POSTS_ERROR]: (state, payload) => ({
    ...state,
    fetching: false,
    error: payload
  })
});
