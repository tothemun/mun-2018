import React from 'react'
import { storiesOf  } from '@storybook/react';
import PaginationButtons from './PaginationButtons';

storiesOf('Pagination Butttons', module)
  .add('Default', () => (
    <PaginationButtons totalPages={4} currentPage={0} handleClick={}/>
  ))
