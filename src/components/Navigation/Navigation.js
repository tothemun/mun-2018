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
              <Link to='/' className={styles.logoLink}>
                <img src={Logo} className={styles.logo} alt='Logo'/>
              </Link>
              <ul className={styles.linkList}>
                <li>
                  <Link to='/' activeClassName={styles.active}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/posts' activeClassName={styles.active}>
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
