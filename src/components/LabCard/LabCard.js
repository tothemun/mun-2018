import React from 'react';
import { Col, Row } from 'react-grid-system';
import PropTypes from 'prop-types';
import styles from './LabCard.css';

const LabCard = ({ children, description, sourceLink, title }) => (
  <Row className={styles.container}>
    <Col xs={12} md={6} className={styles.renderer}>
      {children}
    </Col>
    <Col xs={12} md={6}>
      <h4>{title}</h4>
      <p>{description}</p>
      <a className={styles.link} href={sourceLink}>Source</a>
    </Col>
  </Row>
);

LabCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  description: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default LabCard;
