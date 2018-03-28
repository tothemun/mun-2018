import { storiesOf  } from '@storybook/react';
import centered from '@storybook/addon-centered';
import React from 'react';
import IsoBob from './IsoBob';

storiesOf('IsoBob', module)  
  .add('default', () => (
    <div style={{height: '100%', width: '100%'}}>
      <IsoBob />
    </div>
  ))
