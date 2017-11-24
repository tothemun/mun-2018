import { merge } from 'lodash';
import {
  ADD_MEDIA,
  SET_MEDIA_FETCHING,
  MEDIA_ERROR
} from '../actions/types';
import { createReducer } from '_utils';

const initialState = {
  error: null,
  fetched: false,
  fetching: false,
  media: {}
};

export default createReducer(initialState, {
  [ADD_MEDIA]: (state, payload) => ({
    ...state,
    fetching: false,
    error: null,
    media: merge(state.media, payload)
  }),
  [SET_MEDIA_FETCHING]: (state) => ({
    ...state,
    fetching: true
  }),
  [MEDIA_ERROR]: (state, payload) => ({
    ...state,
    fetching: false,
    error: payload
  })
});
