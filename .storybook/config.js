import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import React from 'react';
import '_styles/index.css';

setOptions({
  goFullScreen: false,
});

configure(
  () => {
    const req = require.context('../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));

  },
  module
);
