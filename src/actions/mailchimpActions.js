import axios from 'axios';

const apiKey = process.env.REACT_APP_MAILCHIMP_KEY || '';

export function signupEmail(email) {
  axios.post('https://muncreative.us15.list-manage.com/subscribe/post')
    .then(res => {
      console.log(res.data);
    })
}
