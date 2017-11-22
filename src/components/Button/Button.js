import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}

export default Button;
