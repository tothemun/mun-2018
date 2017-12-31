import cn from 'classnames';
import { Expo, Linear, TimelineMax, TweenLite } from 'gsap';
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
    this.anim = this.addAnimation(this.animateBox);
  }

  animateBox = () => {
    const tw0 = new TweenLite.to('#left-side', .5, {
      height: '100%',
      ease: Linear.easeNone
    });

    const tw1 = new TweenLite.to('#top-side', .5, {
      width: '100%',
      ease: Linear.easeNone
    });

    const tw2 = new TweenLite.to('#right-side', .5, {
      height: '100%',
      ease: Linear.easeNone
    });

    const tw3 = new TweenLite.to('#bottom-side', .5, {
      width: '100%',
      ease: Linear.easeNone
    });

    const timeline = new TimelineMax()
      .add(tw0)
      .add(tw1)
      .add(tw2)
      .add(tw3);

    return timeline.tweenFromTo(0, timeline.duration(), {
      ease: Expo.easeInOut,
      delay: 1,
      immediateRender: false
    });
  }

  render() {
    const { className, display } = this.props;

    return (
      <div className={cn(className, styles.header)}>
        <div className={cn(styles.image, {[styles.display]: display})}>
          <span id='left-side' className={styles.left}></span>
          <span id='top-side' className={styles.top}></span>
          <span id='right-side' className={styles.right}></span>
          <span id='bottom-side' className={styles.bottom}></span>
          <ProgressiveImage src={HeaderImg} alt='Header' />
          <object data={Headline} alt='Make It Matter' aria-label='Make It Matter' className={styles.headline}/>
        </div>
      </div>
    );
  }
};

HomepageHeader.propTypes = {
  className: PropTypes.string
};

export default GSAP()(HomepageHeader);
