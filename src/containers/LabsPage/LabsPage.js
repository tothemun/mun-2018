import React, { Component } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { LabCard, NewsletterSignup } from '_components';
import { BorderHighlight, IsoBob, Timeline, Rings, WaterShader } from '_components/Labs';
import baseStyles from '_styles/index.css';
import styles from './LabsPage.css';

class LabsPage extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <Row className={baseStyles.mb4}>
          <Col xs={12}>
            <h1>Labs</h1>
            <p className={baseStyles.mb0}>100% Code.</p>
            <p className={baseStyles.mb0}>No images or videos.</p>
            <p>Rendered in real time.</p>
          </Col>
        </Row>
        <LabCard
          title='Isometric Bob'
          description='GSAP timeline and edge highlighting.'
          sourceLink='https://github.com'
        >
          <IsoBob />
        </LabCard>
        <LabCard
          title='Timeline'
          description='Demo of chaining 3D animation in a timeline with GSAP.'
          sourceLink='https://github.com/tothemun/mun-2018/tree/master/src/components/Labs/Timeline'
        >
          <Timeline />
        </LabCard>
        <LabCard
          title='Edge Highlight'
          description='Shader for edge highlighting. Uses barycentric coordinates to determine edges, and uses the fragment shader to change those colors.'
          sourceLink='https://github.com/tothemun/mun-2018/tree/master/src/components/Labs/BorderHighlight'
        >
          <BorderHighlight />
        </LabCard>
        <LabCard
          title='Water Shader'
          description='Realistic water generated entirely through the fragment shader. Generates waves and ripples using noise generators.'
          sourceLink='https://github.com/tothemun/mun-2018/tree/master/src/components/Labs/WaterShader'
        >
          <WaterShader />
        </LabCard>
        <LabCard
          title='Oscillating Rings'
          description='Series of rings animated with Sine and Cosine functions in chase.'
          sourceLink='https://github.com/tothemun/mun-2018/tree/master/src/components/Labs/Rings'
        >
          <Rings />
        </LabCard>
        <Row>
          <Col xs={12}>
            <NewsletterSignup />
          </Col>
        </Row>
      </Container>
    );
  }
}


export default LabsPage;
