import cn from 'classnames';
import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import { ProgressiveImage } from '_components';
import styles from './HomepageHeader.css';
import HeaderImg from './header-img.jpg';
import Headline from './headline.svg';

class HomepageHeader extends Component {
  componentDidMount() {
    this.cameraPosition = new THREE.Vector3(0, 0, 5);
  }

  onMouseMove = (e) => {
    const { oldMouseX, oldMouseY } = this.state;

    this.setState({
      difMouseX: e.screenX - oldMouseX,
      difMouseY: e.screenY - oldMouseY,
      oldMouseX: e.screenX,
      oldMouseY: e.screenY
    });
  }

  onAnimate = () => {
    const { difMouseX, difMouseY } = this.state;
    const mouseMod = 1000;

    this.setState({
      sphereRotation: new THREE.Euler(
        this.state.sphereRotation.x + 0.01 + difMouseY / mouseMod,
        this.state.sphereRotation.y + 0.01 + difMouseX / mouseMod,
        0
      ),
    });
  };

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    const { display } = this.props;
    return (
      <div className={styles.header} onMouseMove={this.onMouseMove}>
        <div
          className={cn(styles.animation, {[styles.display]: display})}
          ref={ (el) => this.$animationContainer = el}
        >
          <span className={styles.left}></span>
          <span className={styles.top}></span>
          <span className={styles.right}></span>
          <span className={styles.bottom}></span>
          <ProgressiveImage src={HeaderImg} alt='Header' />
          <React3
            alpha={true}
            mainCamera="camera"
            width={width}
            height={height}
            onAnimate={this.onAnimate}
            clearAlpha={0}
          >
            <scene>
              <perspectiveCamera
                name="camera"
                fov={75}
                aspect={width / height}
                near={0.1}
                far={1000}
                position={this.cameraPosition}
              />
              <mesh rotation={this.state.sphereRotation} >
                <icosahedronGeometry
                  radius={1}
                  detail={1}
                />
                <meshBasicMaterial
                  color={0xAAAAAAA}
                  wireframe={true}
                />
              </mesh>
            </scene>
          </React3>
          <object data={Headline} alt='Make It Matter' aria-label='Make It Matter' className={styles.headline}/>
        </div>
      </div>
    );
  }

  state = {
    oldMouseX: 0,
    oldMouseY: 0,
    difMouseX: 0,
    difMouseY: 0,
    sphereRotation: new THREE.Euler(),
  };
}

export default HomepageHeader;
