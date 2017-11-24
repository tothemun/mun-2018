import axios from 'axios';
import { URL_BASE } from './ApiRoutes';
import { ADD_MEDIA, SET_MEDIA_FETCHING, MEDIA_ERROR } from './types';

function getMedia(id) {
  return axios.get(`${URL_BASE}/media/${id}`);
}

export function fetchMedia(id) {
  return dispatch => {
    dispatch({ type: SET_MEDIA_FETCHING });
    return getMedia(id)
      .then(res => {
        const { data } = res;

        dispatch({
          type: ADD_MEDIA,
          payload: data
        });

        return res;
      })
      .catch(err => {
        dispatch({type: MEDIA_ERROR, payload: err});

        return err;
      });
  }
}

export function fetchFeaturedMedia(posts) {
  return dispatch => {
    dispatch({ type: SET_MEDIA_FETCHING });
    return Promise.all(posts.map(post => getMedia(post.featured_media)))
      .then(res => {
        console.log(res);
      })
  }
}
