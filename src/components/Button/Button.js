import cn from 'classnames';
import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {
  render() {
    const { children, className, to, additionalStyles } = this.props;
    const styleClasses = additionalStyles.map(style => styles[style]);

    return (
      <a className={cn(styles.container, styleClasses, className)} href={to}>
        <p>{children}</p>
      </a>
    );
  }
}

Button.defaultProps = {
  additionalStyles: []
}

export default Button;
