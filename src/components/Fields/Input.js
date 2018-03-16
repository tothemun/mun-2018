import cn from 'classnames';
import React, { Component } from 'react';
import baseStyles from '_styles/index.css';
import inputGroup from './InputGroup/InputGroup'
import styles from './Field.css'

class Input extends Component {
  render() {
    const {
      children,
      componentClass,
      input,
      name,
      placeholder,
      type,
      wrappedStatusClass
    } = this.props;

    return (
      <div className={cn(componentClass, styles.fieldContainer)}>
        <input
          type={type}
          name={name}
          className={cn(styles.field, wrappedStatusClass, {[baseStyles.mr1]: children})}
          {...input}
          placeholder={placeholder}
        />
        {children}
      </div>
    );
  }
};

Input.defaultProps = {
  type: 'text'
}

export default inputGroup(Input);
