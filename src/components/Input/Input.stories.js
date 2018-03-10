import React from 'react'
import { storiesOf  } from '@storybook/react';
import centered from '@storybook/addon-centered';
import Input from './Input';

storiesOf('Input', module)
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
