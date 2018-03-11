import axios from 'axios';
import { URL_BASE } from './ApiRoutes';

export function subscribeEmail({ email }) {
  const data = {
    email,
    status: 'subscribed'
  };

  console.log(data);

  return dispatch => {
    axios.post(`${URL_BASE}/mailchimp/v1/subscribe`, data)
    .then(res => {
      console.log(res);
    });
  }
}
