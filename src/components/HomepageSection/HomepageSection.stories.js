import React from 'react'
import { storiesOf  } from '@storybook/react';
import HomepageSection from './HomepageSection';

storiesOf('HomepageSection', module)
  .add('Normal', () => (
    <HomepageSection
      title='On Writing and Logs'
      subTitle='This is an example blog post where we go into great detail about something and blow everyones mind with our insight.'
    >
      Content Here
    </HomepageSection>
  ))
