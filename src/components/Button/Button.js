import cn from 'classnames';
import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import styles from './Button.css';
import Loader from './Loader/Loader';

class Button extends Component {
  componentDidMount() {
    const { animate } = this.props;
    const self = this.$element;

    TweenLite.set(self, { opacity: 0, y: 100 });

    if (animate) {
      TweenLite.to(self, 0.5, { opacity:1, y: 0 });
    }
  }

  renderButton() {
    const { className, disabled, submitting, onClick, label, type } = this.props;

    return (
      <button
        className={cn(this.styleClasses, className, styles.container, {[styles.submitting]: submitting})}
        disabled={disabled}
        onClick={onClick}
        ref={(el) => { this.$element = el; }}
        type={type}
      >
        {label}
      </button>
    );
  }

  renderLink() {
    const { className, label, to } = this.props;

    return (
      <Link to={to}
            className={cn(this.styleClasses, className, styles.container)}
            ref={(el) => { this.$element = el; }}
      >
        {label}
      </Link>
    )
  }

  renderAnchor() {
    const { className, href, label } = this.props;

    return (
      <a href={href}
         className={cn(this.styleClasses, className, styles.container)}
         ref={(el) => { this.$element = el; }}
      >
        {label}
      </a>
    );
  }

  render() {
    const { additionalStyles, submitting, href, to } = this.props;
    let buttonType;
    this.styleClasses = additionalStyles.map(style => styles[style]);

    if (to) {
      buttonType = this.renderLink()
    } else if (href) {
      buttonType = this.renderAnchor()
    } else {
      buttonType = this.renderButton()
    }

    return (
      <div className={styles.wrapper}>
        {buttonType}
        { submitting && <Loader /> }
      </div>
    );
  }
}

Button.defaultProps = {
  animate: true,
  submitting: false,
  additionalStyles: []
};

Button.propTypes = {
  animate: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  submitting: PropTypes.bool,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
};

export default Button;
