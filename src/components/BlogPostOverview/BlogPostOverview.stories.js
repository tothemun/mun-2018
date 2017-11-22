import React from 'react'
import { storiesOf  } from '@storybook/react';
import BlogPostOverview from './BlogPostOverview';

storiesOf('BlogPostOverview', module)
  .add('Normal', () => (
    <BlogPostOverview
      image='https://images.unsplash.com/photo-1500043189552-8feddf8d9f64?auto=format&fit=crop&w=1934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
      title='Test Post'
      author='Jonathan Blair'
      blurb='Test test test'
    />
  ))
