import { storiesOf  } from '@storybook/react';
import centered from '@storybook/addon-centered';
import React from 'react'
import { Provider } from 'react-redux';
import NewsletterSignup from './NewsletterSignup';
import { configureStore } from '../../stores';

storiesOf('NewsletterSignup', module)
  .addDecorator(story => <Provider store={configureStore}>{story()}</Provider>)
  .addDecorator(centered)
  .add('Default', () => (
    <NewsletterSignup />
  ))
