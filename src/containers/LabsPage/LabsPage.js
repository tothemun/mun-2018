import React, { Component } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { WaterShader } from '_components/Labs';
import baseStyles from '_styles/index.css';
import styles from './LabsPage.css';

class LabsPage extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Row>
          <Col xs={12}>
            <h1 className={baseStyles.mb4}>Labs</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={styles.item}>
            <WaterShader />
            <h5>Three.js GLSL Water</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default LabsPage;
