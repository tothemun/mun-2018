import cn from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendContactForm } from '_actions/mailActions';
import { Button, Input, TextArea } from '_components';
import baseStyles from '_styles/index.css';
import styles from './ContactForm.css';

const submit = (values) => {
  let message = `Name: ${values.name}\n`;
  message += `Email: ${values.email}\n`;
  message += `Message: ${values.message}`;

  return sendContactForm({ message } );
}

let ContactForm = ({ handleSubmit, submitting, submitSucceeded }) => (
  <div className={styles.wrapper}>
    <h4>Got something we could collaborate on? Drop us a line.</h4>
    <p className={baseStyles.mb4}>We've worked with some fantastic people, we'd love to count you among them.</p>
    <form onSubmit={handleSubmit(submit)}>
      <Field
        component={Input}
        label='Your Name'
        name='name'
        required={true}
      />
      <Field
        component={Input}
        label='Your Email'
        type='email'
        placeholder='example@site.com'
        name='email'
        required={true}
      />
      <Field
        component={TextArea}
        label='Your Message'
        name='message'
        rows={4}
        required={true}
      />
      <Button
        additionalStyles={['reverse']}
        className={baseStyles.mb1}
        disabled={submitting}
        submitting={submitting}
        label='Submit'
        type='submit'
      />
    </form>
    { submitSucceeded && <p className={baseStyles.m0}>We got it.</p> }
  </div>
);

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm);

export default connect(
  null,
  { sendContactForm }
)(ContactForm);
