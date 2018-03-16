import cn from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { subscribeEmail } from '_actions/mailchimpActions';
import { Button, Input } from '_components';
import baseStyles from '_styles/index.css';
import { getRandomInt } from '_utils';
import copy from './copy.json';
import styles from './NewsletterSignup.css';

class NewsletterSignup extends Component {
  componentWillMount() {
    this.setState({copyOption: getRandomInt(0, copy.items.length - 1)});
  }

  submit = (values) => {
    return subscribeEmail(values);
  }

  render() {
    const { copyOption } = this.state;
    const { handleSubmit, submitting, submitSucceeded } = this.props;
    const { items } = copy;

    return (
      <div className={styles.wrapper}>
        <h4>{items[copyOption].headline}</h4>
        <p className={baseStyles.mb4}>{items[copyOption].body}</p>
        <form onSubmit={handleSubmit(this.submit)} className={cn({[baseStyles.mb1]: submitSucceeded})}>
          <Field
            component={Input}
            placeholder="Email here."
            name='email'
            type='email'
            containerClass={baseStyles.mb0}
          >
            <Button
              additionalStyles={['reverse']}
              className={cn(baseStyles.center, styles.button)}
              disabled={submitting}
              submitting={submitting}
              label='Subscribe'
              type='submit'
            />
          </Field>
        </form>
        { submitSucceeded && <p className={baseStyles.m0}>Successfully subscribed.</p> }
      </div>
    );
  }

  state = {
    copyOption: 0
  };
};

const mapStateToProps = (state) => ({
  submitting: state.form.emailSignup.submitting,
  submitSucceeded: state.form.emailSignup.submitSucceeded
})

export default connect(mapStateToProps, { subscribeEmail })(reduxForm({
  form: 'emailSignup'
})(NewsletterSignup));
