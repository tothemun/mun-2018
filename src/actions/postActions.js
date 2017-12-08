import axios from 'axios';
import qs from 'qs';
import { URL_BASE } from './ApiRoutes';
import {
  CLEAR_ACTIVE_POST,
  POSTS_ERROR,
  SET_ACTIVE_POST,
  SET_POST_PAGES,
  SET_POSTS_FETCHING,
  SET_POSTS
} from './types';

function getPosts(query = { _embed: true }) {
  return axios.get(`${URL_BASE}/posts?${qs.stringify(query)}`);
}

function getPost(id, query = { _embed: true }) {
  return axios.get(`${URL_BASE}/posts/${id}?${qs.stringify(query)}`);
}

export function fetchAllPosts(query = { _embed: true }) {
  return dispatch => {
    dispatch({ type: SET_POSTS_FETCHING });
    return getPosts(query)
      .then(res => {
        const { data, headers } = res;

        dispatch({
          type: SET_POST_PAGES,
          // The header is a string, so we parse to integer. 10 is the radix (decimal).
          payload: parseInt(headers['x-wp-totalpages'], 10)
        });

        dispatch({
          type: SET_POSTS,
          payload: data
        });

        return data;
      })
      .catch(err => {
        dispatch({type: POSTS_ERROR, payload: err});

        return err;
      });
  }
}

export function fetchPost(id) {
  return dispatch => {
    dispatch({ type: SET_POSTS_FETCHING });

    return getPost(id)
      .then(res => {
        const { data } = res;

        dispatch({
          type: SET_ACTIVE_POST,
          payload: data
        });

        return data;
      })
      .catch(err => {
        dispatch({type: POSTS_ERROR, payload: err});

        return err;
      })
  }
}

export function clearActivePost() {
  return dispatch => {
    dispatch({ type: CLEAR_ACTIVE_POST });
  }
}
