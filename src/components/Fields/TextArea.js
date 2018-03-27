import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import inputGroup from './InputGroup/InputGroup';
import styles from './Field.css';

const TextArea = ({
  name,
  input,
  placeholder,
  resize,
  required,
  rows,
  wrappedStatusClass,
  type, value
}) => {
  const resizeStyle = {
    resize
  };

  return (
    <textarea
      style={resizeStyle}
      type={type}
      name={name}
      className={cn(styles.field, wrappedStatusClass)}
      {...input}
      placeholder={placeholder}
      rows={rows}
      required={required}
    />
  )
}

TextArea.defaultProps = {
  type: 'text',
  resize: 'vertical'
}

TextArea.propTypes = {
  type: PropTypes.string,
  resize: PropTypes.string,
  rows: PropTypes.number
}

export default inputGroup(TextArea);
