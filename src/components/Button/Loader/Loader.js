import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import styles from './Loader.css';

class Loader extends Component {
  componentDidMount() {
    const self = this.$indicator;
    let tl = new TimelineMax({
      repeat: -1,
      yoyo: true
    });

    tl.to(self, .5, {
        x: 10
      })
      .to(self, 1, {
        x: -20
      });

    tl.play();
  }

  render() {
    return (
      <div className={styles.loader}
           ref={(el) => { this.$indicator = el; }}
      />
    );
  }
}

export default Loader;
