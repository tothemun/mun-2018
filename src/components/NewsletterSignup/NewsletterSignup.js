import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Input } from '_components';
import { signupEmail } from '_actions/mailchimpActions';
import baseStyles from '_styles/index.css';

function submit(values, dispatch) {
  return dispatch(signupEmail(values));
}

const NewsletterSignup = (props) => {
  const { handleSubmit, signupEmail } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Input}
        label="Email"
        name='email'
        type='email'
      >
        <Button className={baseStyles.center}>
          Signup
        </Button>
      </Field>
    </form>
  );
};

export default reduxForm({
  form: 'emailSignup',
  onSubmit: submit
})(NewsletterSignup);
