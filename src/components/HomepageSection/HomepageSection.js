import React from 'react';
import { Row, Col } from 'react-grid-system';

const HomepageSection = ({ image, title, blurb, author }) => (
  <Row>
    <Col xs={4}>
      <img src={image} />
    </Col>
    <Col xs={8}>
      <h4>{title}></h4>
    </Col>
  </Row>
);

export default HomepageSection;
