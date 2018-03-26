import cn from 'classnames';
import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import { clone } from 'lodash';
import * as THREE from 'three';
import { withRenderer } from '_components';
import { Particle } from '_graphics';
import { getRandomFloat } from '_utils';
import { map, noise } from '_utils/Math';
import styles from './HomepageHeader.css';
import Headline from './headline.svg';
import Stats from 'stats.js';

const noiseOndulation = 200;
const noiseVariation = 1000;
const noiseInterval = 250;
const noiseResistance = 1000;
const noiseScale = 10;

class HomepageHeader extends Component {
  componentWillMount() {
    this.frameCount = 0;
    this.particles = [];
    this.vertices = [];

    this.clock = new THREE.Clock();
    this.geometry = new THREE.Geometry();
    this.material = new THREE.PointsMaterial({
      size: 0.8,
      sizeAttenuation: false
    });
    this.pointCloud = new THREE.Points(this.geometry, this.material);

    this.stats = new Stats();
    this.stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( this.stats.dom );
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    const { height, width } = this.props;

    this.cameraPosition = new THREE.Vector3(0, 0, -180);

    this.emitters = [];
    this.particles = [];
    this.createEmitters(50);
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

  createEmitters = (_r) => {
    const emitterCount = 100;
    const emitterAngle = Math.PI * 2 / emitterCount;

    for (let i = 0; i < Math.PI * 2; i += emitterAngle) {
      const eX = _r * Math.sin(i);
      const eY = _r * Math.cos(i);

      this.emitters.push(new THREE.Vector2(eX, eY));
    }
  }

  noiseInput(value) {
    return value / noiseOndulation + noiseVariation;
  }

  onAnimate = () => {
    const { height, width } = this.state;
    this.frameCount++;

    this.stats.begin();

    const time = clone(this.clock.getElapsedTime());
    const newVertices = [];

    this.geometry.dispose();
    this.geometry = new THREE.Geometry();

    for (let e of this.emitters) {
      this.particles.push(new Particle(e.x, e.y, getRandomFloat(1, 2), getRandomFloat(0.1, 0.5), this.frameCount));
    }


    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.flow(this.frameCount);

      if(p.isDead()) {
        this.particles.splice(i, i+1);
      } else {
        this.geometry.vertices.push(new THREE.Vector3(p.pos.x, p.pos.y, 0));
      }
    }

    this.$scene.remove(this.pointCloud);
    this.pointCloud = new THREE.Points(this.geometry, this.material);
    this.$scene.add(this.pointCloud);

    this.stats.end();
  }

  render() {
    const { fov, height, width } = this.state;
    const { display } = this.props;

    return (
      <div className={styles.header} onMouseMove={this.onMouseMove} ref={(el) => { this.$container = el; }}>
        <div className={cn(styles.animation, {[styles.display]: display})}>
          <span className={styles.left}></span>
          <span className={styles.top}></span>
          <span className={styles.right}></span>
          <span className={styles.bottom}></span>
          <React3
            antialias={true}
            pixelRatio={window.devicePixelRatio || 1}
            mainCamera="camera"
            width={width}
            height={height}
            onAnimate={this.onAnimate}
            clearColor={0x333333}
          >
            <scene ref={el => this.$scene = el}>
              <perspectiveCamera
                name="camera"
                fov={75}
                aspect={width / height}
                near={0.1}
                far={1000}
                position={this.cameraPosition}
                lookAt={new THREE.Vector3(0, 0, 0)}
              />

            </scene>
          </React3>
          <object data={Headline} alt='Make It Matter' aria-label='Make It Matter' className={styles.headline}/>
        </div>
      </div>
    );
  }

  state = {
    height: 100,
    width: 100
  };
}

export default HomepageHeader;
