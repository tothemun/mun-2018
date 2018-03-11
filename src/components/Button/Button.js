import cn from 'classnames';
import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import styles from './Button.css';

class Button extends Component {
  componentDidMount() {
    const { animate } = this.props;
    const self = this.$element;

    if (animate) {
      TweenLite.from(self, 0.5, { autoAlpha:0, y: 100 });
    }
  }

  renderButton() {
    const { className, onClick, label, type } = this.props;

    return (
      <button
        className={cn(this.styleClasses, className, styles.container)}
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
      <Link to={to} className={cn(this.styleClasses, className, styles.container)} ref={(el) => { this.$element = el; }}>
        { label }
      </Link>
    )
  }

  renderAnchor() {
    const { className, href, label } = this.props;

    return (
      <a href={href} className={cn(this.styleClasses, className, styles.container)} ref={(el) => { this.$element = el; }}>
        {label}
      </a>
    );
  }

  render() {
    const { additionalStyles, href, to } = this.props;
    this.styleClasses = additionalStyles.map(style => styles[style]);

    if (to) {
      return this.renderLink()
    } else if (href) {
      return this.renderAnchor()
    } else {
      return this.renderButton()
    }
  }
}

Button.defaultProps = {
  animate: true,
  additionalStyles: []
};

Button.propTypes = {
  animate: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
};

export default Button;
