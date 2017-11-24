import React, { Component } from 'react';
import { Container, Col, Row } from 'react-grid-system';
import { Link } from 'react-router';
import styles from './Navigation.css';
import Logo from './logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Container>
          <Row>
            <Col xs={12}>
              <object data={Logo} className={styles.logo} alt='MUN Logo' aria-label='Logo'/>
              <ul className={styles.linkList}>
                <li>
                  <Link to='/' activeClassName={styles.active}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='#' activeClassName={styles.active}>
                    Labs
                  </Link>
                </li>
                <li>
                  <Link to='#' activeClassName={styles.active}>
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
