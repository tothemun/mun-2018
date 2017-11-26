import axios from 'axios';
import qs from 'qs';
import { URL_BASE } from './ApiRoutes';
import {
  CLEAR_ACTIVE_POST,
  POSTS_ERROR,
  SET_ACTIVE_POST,
  SET_POSTS_FETCHING,
  SET_POSTS
} from './types';
import { fetchFeaturedMedia } from './mediaActions';

function getPosts(query = { _embed: true }) {
  return axios.get(`${URL_BASE}/posts`, qs.stringify(query));
}

function getPost(id, query = { _embed: true }) {
  return axios.get(`${URL_BASE}/posts/${id}`, qs.stringify(query));
}

export function fetchAllPosts(categoriesExclude) {
  return dispatch => {
    dispatch({ type: SET_POSTS_FETCHING });
    return axios.get(`${URL_BASE}/posts?_embed=true`)
      .then(res => {
        const { data } = res;

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
