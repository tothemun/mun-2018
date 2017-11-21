import React, { Component } from 'react';
import { Container, Col, Row } from 'react-grid-system';
import { Link } from 'react-router';
import baseStyles from '_styles/index.css';
import styles from './Navigation.css';
import Logo from './logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Container>
          <Row>
            <Col xs={12}>
              <object data={Logo} className={styles.logo} />
              <ul className={styles.linkList}>
                <li className={styles.linkItem}>
                  <Link to='#' className={styles.link}>
                    Home
                  </Link>
                </li>
                <li className={styles.linkItem}>
                  <Link to='#' className={styles.link}>
                    Labs
                  </Link>
                </li>
                <li className={styles.linkItem}>
                  <Link to='#' className={styles.link}>
                    Writing
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;
