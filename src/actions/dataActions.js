import axios from 'axios';

export function fetchPost() {
  return dispatch => {
    dispatch({type: 'SET_DATA_FETCHING'});
    return axios.get('url')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        dispatch({type: 'ADD_ERROR', payload: err});
      });
  }
}
