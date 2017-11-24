import axios from 'axios';
import { URL_BASE } from './ApiRoutes';
import { SET_POSTS_FETCHING, SET_POSTS, POSTS_ERROR } from './types';
import { fetchFeaturedMedia } from './mediaActions';

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
