import React, { Component } from 'react';
import { withRenderer } from '_components';

class Eclipse extends Component {
  componentDidMount() {
    this.ctx = this.$canvas.getContext('2d');
    this.onAnimate();
  }

  componentDidUpdate() {
    this.ctx = this.$canvas.getContext('2d');
    this.ctx.clearRect(0, 0, 200, 200);
    this.onAnimate();
  }

  onAnimate = () => {
    this.ctx.save();
    this.ctx.translate(100, 100);
    this.ctx.rotate(this.props.rotation, 100, 100);
    this.ctx.fillStyle = '#F00';
    this.ctx.fillRect(-50, -50, 100, 100);
    this.ctx.restore();

    requestAnimationFrame(this.onAnimate);
  }

  render() {
    const { height, width } = this.props;

    return (
    <canvas
        ref={el => this.$canvas = el}
        height={height}
        width={width}
      >
      </canvas>
    );
  }
}

export default withRenderer(Eclipse);
