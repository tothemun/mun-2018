import cn from 'classnames';
import { Expo, TimelineMax, TweenLite } from 'gsap';
import React, { Component } from 'react';
import GSAP from 'react-gsap-enhancer';
import PropTypes from 'prop-types';
import { ProgressiveImage } from '_components';
import styles from './HomepageHeader.css';
import HeaderImg from './header-img.jpg';
import Headline from './headline.svg';

class HomepageHeader extends Component {
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    this.addAnimation(this.animateBox);
  }

  animateBox = () => {

    const timeline = new TimelineMax()
      .to('#left-side', .5, {
        height: '100%'
      })
      .to('#top-side', .5, {
        width: '100%'
      })
      .to('#right-side', .5, {
        height: '100%'
      })
      .to('#bottom-side', .5, {
        width: '100%'
      });

    return timeline.tweenFromTo(0, timeline.duration(), {
      ease: Expo.easeInOut,
      immediateRender: false
    });
  }

  animateImage = () => {
    return new TweenLite.to('#image', 1, {
      opacity: 1
    });
  }

  render() {
    const { className } = this.props;

    return (
      <div className={cn(className, styles.header)}>
        <div className={styles.image}>
          <span id='left-side' className={styles.left}></span>
          <span id='top-side' className={styles.top}></span>
          <span id='right-side' className={styles.right}></span>
          <span id='bottom-side' className={styles.bottom}></span>
          <div id='image' className={styles.imageContainer}>
            <ProgressiveImage src={HeaderImg} alt='Header' />
            <object data={Headline} alt='Make It Matter' aria-label='Make It Matter' className={styles.headline}/>
          </div>
        </div>
      </div>
    );
  }
};

HomepageHeader.propTypes = {
  className: PropTypes.string
};

export default GSAP()(HomepageHeader);
