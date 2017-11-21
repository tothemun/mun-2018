import React from 'react';
import { Container, Col, Row } from 'react-grid-system';
import styles from './Homepage.css';
import baseStyles from '_styles/index.css';
import HeaderImg from './header-img.jpg';
import HeadLine from './headline.svg';

const Homepage = (props) => (
  <div className={baseStyles.pt5}>
    <div className={styles.header}>
      <div className={styles.image}>
        <img src={HeaderImg} />
        <object data={HeadLine} alt='Make It Matter' className={styles.headline}/>
      </div>
    </div>
    <Container>
      <Row>
        <Col xs={12}>

        </Col>
      </Row>
    </Container>
  </div>
);

export default Homepage;
