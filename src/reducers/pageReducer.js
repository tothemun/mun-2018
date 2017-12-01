import {
  CLEAR_ACTIVE_PAGE,
  PAGES_ERROR,
  SET_ACTIVE_PAGE,
  SET_PAGES_FETCHING,
  SET_PAGES
} from '_actions/types';
import { createReducer } from '_utils';

const initialState = {
  activePage: null,
  error: null,
  fetched: false,
  fetching: false,
  pages: []
};

export default createReducer(initialState, {
  [CLEAR_ACTIVE_PAGE]: (state) => ({
    ...state,
    activePage: null
  }),
  [SET_ACTIVE_PAGE]: (state, payload) => ({
    ...state,
    activePage: payload,
    fetching: false,
    fetched: true,
    error: null
  }),
  [SET_PAGES]: (state, payload) => ({
    ...state,
    fetching: false,
    fetched: true,
    error: null,
    pages: payload
  }),
  [SET_PAGES_FETCHING]: (state) => ({
    ...state,
    fetching: true
  }),
  [PAGES_ERROR]: (state, payload) => ({
    ...state,
    fetching: false,
    error: payload
  })
});
