import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {
  render() {
    const { children, to } = this.props;
    return (
      <a className={styles.container} href={to}>
        <p>{children}</p>
      </a>
    );
  }
}

export default Button;
