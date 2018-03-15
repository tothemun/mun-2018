import {
  CLEAR_ACTIVE_POST,
  SET_ACTIVE_POST,
  SET_POST_PAGES,
  SET_POSTS,
  SET_POSTS_FETCHING,
  POSTS_ERROR
} from '../actions/types';
import { createReducer } from '_utils';

const initialState = {
  activePost: null,
  error: null,
  fetched: false,
  fetching: false,
  posts: [],
  pages: 0
};

export default createReducer(initialState, {
  [CLEAR_ACTIVE_POST]: (state) => ({
    ...state,
    activePost: null
  }),
  [SET_ACTIVE_POST]: (state, payload) => ({
    ...state,
    activePost: payload,
    fetching: false,
    fetched: true,
    error: null
  }),
  [SET_POST_PAGES]: (state, payload) => ({
    ...state,
    pages: payload
  }),
  [SET_POSTS]: (state, payload) => ({
    ...state,
    fetching: false,
    fetched: true,
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
