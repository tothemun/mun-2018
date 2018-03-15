import { storiesOf  } from '@storybook/react';
import centered from '@storybook/addon-centered';
import React from 'react';
import { Provider } from 'react-redux';
import { reduxForm } from 'redux-form'
import Input from './Input';
import { configureStore } from '../../stores';

storiesOf('Input', module)
  .addDecorator(story => <Provider store={configureStore}>{story()}</Provider>)
  .addDecorator(story => reduxForm({form: 'emailSignup'})(story()))
  .addDecorator(centered)
  .add('Default', () => (
    <Input label='Input' placeholder='Enter Text...'/>
  ))
  .add('Help Text', () => (
    <Input label='Input' placeholder='Enter Text...' helpText='Enter your text'/>
  ))
  .add('Error', () => (
    <Input label='Input' placeholder='Enter Text...' error='There was an error'/>
  ))
  .add('With Button', () => (
    <Input label='Input' placeholder='Enter Text...' onButton={() => console.log('Clicked')} buttonText='Submit'/>
  ))
