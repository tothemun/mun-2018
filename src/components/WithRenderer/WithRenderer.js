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

    handleIntersection = (event) => {
      if(event.isIntersecting) {
        this.setState({
          pauseRender: false
        });
      } else {
        this.setState({
          pauseRender: true
        });
      }
    }

    render() {
      const { height, pauseRender, width } = this.state;

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
            <WrappedComponent height={height} width={width} pauseRender={pauseRender}/>
          </div>
        </Observer>
      );
    }

    state = {
      height: 100,
      shouldRender: false,
      width: 100
    };
  }
};

export default withRender;
