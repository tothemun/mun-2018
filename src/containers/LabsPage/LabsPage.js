import React, { Component } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { BorderHighlight, Ellipse, WaterShader } from '_components/Labs';
import baseStyles from '_styles/index.css';
import styles from './LabsPage.css';

class LabsPage extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Row>
          <Col xs={12} className={baseStyles.mb4}>
            <h1>Labs</h1>
            <p>Experients in code</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={styles.itemWrapper}>
            <div className={styles.item}>
              <BorderHighlight />
            </div>
            <h5>Edge Highlight in Three.js</h5>
          </Col>
          <Col xs={12} md={6} className={styles.itemWrapper}>
            <div className={styles.item}>
              <WaterShader />
            </div>
            <h5>Three.js GLSL Water</h5>
          </Col>
          <Col xs={12} md={6} className={styles.itemWrapper}>
            <div className={styles.item}>
              <Ellipse />
            </div>
            <h5>Three.js Top</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default LabsPage;
