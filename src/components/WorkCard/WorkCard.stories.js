import React from 'react'
import { storiesOf  } from '@storybook/react';
import { Container, Col, Row } from 'react-grid-system';
import testData from './testData';
import WorkCard from './WorkCard';

storiesOf('WorkCard', module)
  .add('Normal', () => (
    <Container>
      <Row>
        <Col xs={6}>
          <WorkCard
            loaded={true}
            page={testData}
          />
        </Col>
      </Row>
    </Container>
  ));
