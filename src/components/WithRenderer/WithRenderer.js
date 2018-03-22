import Observer from '@researchgate/react-intersection-observer';
import React from 'react';
import 'intersection-observer';
import styles from './WithRenderer.css';

function withRender(WrappedComponent) {
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

    handleIntersection = (cb) => {
      cb();
    }

    render() {
      const { height, width } = this.state;

      const options = {
        onChange: this.handleIntersection,
        root: "#root"
      };

      return (
        <Observer {...options}>
          <div
            className={styles.wrapper}
            ref={(el) => { this.$container = el; }}
          >
            <WrappedComponent height={height} width={width} onIntersect={this.handleIntersection}/>
          </div>
        </Observer>
      );
    }

    state = {
      height: 100,
      width: 100
    };
  }
};

export default withRender;
