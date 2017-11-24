import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <p>{children}</p>
      </div>
    );
  }
}

export default Button;
