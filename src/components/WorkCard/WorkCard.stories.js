import React from 'react'
import { storiesOf  } from '@storybook/react';
import { Container, Col, Row } from 'react-grid-system';
import WorkCard from './WorkCard';

storiesOf('WorkCard', module)
  .add('Normal', () => (
    <Container>
      <Row>
        <Col xs={6}>
          <WorkCard
            imgSrc='https://images.unsplash.com/photo-1500043189552-8feddf8d9f64?auto=format&fit=crop&w=1934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
            title='On Writing and Logs'
            loaded={true}
          />
        </Col>
      </Row>
    </Container>
  ))
