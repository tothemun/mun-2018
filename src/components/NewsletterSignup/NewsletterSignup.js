import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { Button, Input } from '_components';
import { subscribeEmail } from '_actions/mailchimpActions';
import baseStyles from '_styles/index.css';

const NewsletterSignup = (props) => {
  const { handleSubmit, subscribeEmail } = props;

  const submit = (values) => {
    console.log(values)
    return subscribeEmail(values);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        component={Input}
        label="Email"
        name='email'
        type='email'
      >
        <Button className={baseStyles.center} type='submit' label='Signup' />
      </Field>
    </form>
  );
};

export default connect(null, { subscribeEmail })(reduxForm({
  form: 'emailSignup'
})(NewsletterSignup));
