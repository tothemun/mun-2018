import React from 'react';
import { Row, Col } from 'react-grid-system';
import { ProgressiveImage } from '_components';

const BlogPostOverview = ({ image, title, blurb, author }) => (
  <Row>
    <Col xs={4}>
      <ProgressiveImage src={image} alt='Blog Header'/>
    </Col>
    <Col xs={8}>
      <h4>{title}></h4>
    </Col>
  </Row>
);

export default BlogPostOverview;
