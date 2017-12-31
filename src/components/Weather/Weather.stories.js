import React from 'react'
import { storiesOf  } from '@storybook/react';
import Weather from './Weather';

storiesOf('Weather', module)
  .add('Normal', () => (
    <Weather
    />
  ))
