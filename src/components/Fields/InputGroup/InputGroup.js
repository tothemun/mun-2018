import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputGroup.css';
import fieldStyles from '../Field.css';

function inputGroup(WrappedComponent) {
  return (props) => {
    const {
      children,
      className,
      label,
      helpText,
      meta: { touched, error, warning },
      ...other
    } = props;

    let alertBlock = null;
    let statusClass = null;
    let wrappedStatusClass = null;

    if(touched) {
      if(error) {
        alertBlock = <div className={styles.alertBlock}> {error} </div>;
        statusClass = styles.hasError;
        wrappedStatusClass = fieldStyles.hasError;
      } else if(warning) {
        alertBlock = <div className={styles.alertBlock}> {warning} </div>;
        statusClass = styles.warning;
        wrappedStatusClass = fieldStyles.warning;
      }
    }

    const newProps = {
      wrappedStatusClass,
      children
    };

    return (
      <div className={cn(className, styles.container, statusClass)}>
        <label className={styles.label}>
          {label}
          { helpText && <h5 className={styles.helpText}> {helpText} </h5> }
        </label>
        <WrappedComponent
          { ...other }
          { ...newProps }
        />
        {alertBlock}
      </div>
    )
  }
}

inputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}

export default inputGroup;
