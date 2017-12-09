import cn from 'classnames';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import baseStyles from '_styles/index.css';
import styles from './Footer.css';
import DividerLogo from './divider_logo.svg';
import Logo from './logo.svg';
import Instagram from './instagram.svg';
import variables from '_styles/variables';

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.divider}>
      <hr />
      <object data={DividerLogo} alt='divider' className={styles.dividerLogo} aria-label='divider'/>
    </div>
    <Container>
      <Row>
        <Col xs={12} md={2} className={baseStyles.mb4}>
          <img src={Logo} alt='MUN Logo' className={styles.logo}/>
          <h5 className={baseStyles.mb0}>119 Ingraham St</h5>
          <h5 className={baseStyles.mb0}>Studio 114</h5>
          <h5 className={baseStyles.mb0}>Brooklyn, NY 11237</h5>
        </Col>
        <Col xs={12} md={4} offset={{md: 6}}>
          <div className={cn({[baseStyles.pullRight]: window.innerWidth > variables.sm})}>
            <a href='https://www.instagram.com/tothemunstudio/'  className={styles.social}>
              <img src={Instagram} alt='Instagram'/>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
