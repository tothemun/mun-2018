import cn from 'classnames';
import React, { Component } from 'react';
import { Button } from '_components';
import baseStyles from '_styles/index.css';
import styles from './Input.css';

class Input extends Component {
  render() {
    const {
      buttonText,
      error,
      helpText,
      label,
      onButton,
      placeholder,
      type,
    } = this.props;

    return (
      <div className={cn({[styles.hasError]: error != false})}>
        <label className={styles.label}>
          {label}
        </label>
        <div className={styles.inputWrapper}>
          <input className={cn(styles.input, {[baseStyles.mr1]: onButton})} placeholder={placeholder} type={type}/>
          { onButton &&
            <Button additionalStyles={['reverse', 'inline']}>
              {buttonText}
            </Button>
          }
        </div>
        <h5 className={styles.helpText}>{helpText}</h5>
        <h5 className={styles.error}>{error}</h5>
      </div>
    );
  }
};

Input.defaultProps = {
  error: false
};

export default Input;
