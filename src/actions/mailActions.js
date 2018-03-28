import axios from 'axios';
import { URL_BASE } from './ApiRoutes';

export function subscribeEmail({ email }) {
  const data = {
    email,
    status: 'subscribed'
  };

  return axios.post(`${URL_BASE}/mailchimp/v1/subscribe`, data);
}

export function sendContactForm(data) {
  return axios.post(`${URL_BASE}/mail/v1/contact`, data);
}
