import cn from 'classnames';
import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {
  render() {
    const { className, children, to, type } = this.props;
    let additionalClasses = [];

    switch(type) {
      case 'block':
        additionalClasses.push(styles.block);
        break;
      default:
        break;
    };

    return (
      <a
        className={cn(className, styles.container, additionalClasses)}
        href={to}
      >
        <p>{children}</p>
      </a>
    );
  }
}

export default Button;
