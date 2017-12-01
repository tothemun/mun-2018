import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import baseStyles from '_styles/index.css';
import styles from './Footer.css';
import DividerLogo from './divider_logo.svg';
import Logo from './logo.svg';

const Footer = (props) => (
  <footer className={styles.container}>
    <div className={styles.divider}>
      <hr />
      <object data={DividerLogo} alt='MUN Divider' className={styles.dividerLogo}/>
    </div>
    <Container>
      <Row>
        <Col xs={2}>
          <object data={Logo} alt='MUN Logo' className={styles.logo}/>
          <h5 className={baseStyles.mb0}>119 Ingraham St</h5>
          <h5 className={baseStyles.mb0}>Studio 114</h5>
          <h5 className={baseStyles.mb0}>Brooklyn, NY 11237</h5>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
