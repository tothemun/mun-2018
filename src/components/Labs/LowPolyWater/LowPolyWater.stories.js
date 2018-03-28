import { storiesOf  } from '@storybook/react';
import React from 'react';
import LowPolyWater from './LowPolyWater';

storiesOf('LowPolyWater', module)
  .add('Default', () => (
    <div style={{height: '100vh', width: '100vw'}}>
      <LowPolyWater />
    </div>
  ))
