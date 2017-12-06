import axios from 'axios';
import qs from 'qs';
import { URL_BASE } from './ApiRoutes';
import {
  CLEAR_ACTIVE_PAGE,
  PAGES_ERROR,
  SET_ACTIVE_PAGE,
  SET_PAGES_FETCHING,
  SET_PAGES
} from './types';

function getPages(query = { _embed: true }) {
  return axios.get(`${URL_BASE}/pages?${qs.stringify(query)}`);
}

function getPage(id, query = { _embed: true }) {
  return axios.get(`${URL_BASE}/pages/${id}?${qs.stringify(query)}`);
}

export function fetchAllPages(query = { _embed: true}) {
  return dispatch => {
    dispatch({ type: SET_PAGES_FETCHING });
    return getPages(query)
      .then(res => {
        const { data } = res;

        dispatch({
          type: SET_PAGES,
          payload: data
        });

        return data;
      })
      .catch(err => {
        dispatch({type: PAGES_ERROR, payload: err});

        return err;
      });
  }
}

export function fetchPage(id) {
  return dispatch => {
    dispatch({ type: SET_PAGES_FETCHING });

    return getPage(id)
      .then(res => {
        const { data } = res;

        dispatch({
          type: SET_ACTIVE_PAGE,
          payload: data
        });

        return data;
      })
      .catch(err => {
        dispatch({type: PAGES_ERROR, payload: err});

        return err;
      })
  }
}

export function clearActivePage() {
  return dispatch => {
    dispatch({ type: CLEAR_ACTIVE_PAGE });
  }
}
