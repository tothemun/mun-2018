import cn from 'classnames';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { Button, Input } from '_components';
import { subscribeEmail } from '_actions/mailchimpActions';
import baseStyles from '_styles/index.css';
import styles from './NewsletterSignup.css';

const NewsletterSignup = (props) => {
  const { handleSubmit, subscribeEmail } = props;

  const submit = (values) => {
    console.log(values)
    return subscribeEmail(values);
  }

  return (
    <div className={styles.wrapper}>
      <h4>Procrastination sent straight to your mail hole.</h4>
      <p>Janice in accounting can wait a god damn minute.</p>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          component={Input}
          placeholder="Email here."
          name='email'
          type='email'
          containerClass={baseStyles.mb0}
        >
          <Button className={cn(baseStyles.center, styles.button)} type='submit' label='Email Me.' additionalStyles={['reverse']} />
        </Field>
      </form>
    </div>
  );
};

export default connect(null, { subscribeEmail })(reduxForm({
  form: 'emailSignup'
})(NewsletterSignup));
