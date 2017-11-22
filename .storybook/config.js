import { configure } from '@storybook/react';
import React from 'react';
import '_styles/index.css';

configure(
  () => {
    const req = require.context('../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);
