import React from 'react'
import { storiesOf  } from '@storybook/react';
import BlogPostCard from './BlogPostCard';

storiesOf('BlogPostCard', module)
  .add('Normal', () => (
    <BlogPostCard
      image='https://images.unsplash.com/photo-1500043189552-8feddf8d9f64?auto=format&fit=crop&w=1934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
      title='On Writing and Logs'
      author='Jonathan Blair'
      blurb='This is an example blog post where we go into great detail about something and blow everyones mind with our insight.'
    />
  ))
