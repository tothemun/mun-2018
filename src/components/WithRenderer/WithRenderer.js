import React from 'react';
import styles from './WithRenderer.css';

function withRenderer(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      this.setState({
        height: this.$container.clientHeight,
        width: this.$container.clientWidth
      });
    };

    render() {
      const { height, width } = this.state;

      return (
        <div
          className={styles.wrapper}
          ref={(el) => { this.$container = el; }}
        >
          <WrappedComponent height={height} width={width} />
        </div>
      );
    }

    state = {
      height: 100,
      width: 100
    };
  }
};

export default withRenderer;
