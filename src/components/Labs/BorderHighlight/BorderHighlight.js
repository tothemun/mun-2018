import React, { Component } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';
import { ease } from 'mun-three-utils'
import { setUpBarycentricCoordinates } from '_utils';
import styles from './BorderHighlight.css';
import vert from './edge.vert';
import frag from './edge.frag';

class BorderHighlight extends Component {
  componentWillMount() {
    this.direction = 1;
  }

  componentDidMount() {
    const { $scene, $container } = this;
    this.clock = new THREE.Clock();

    const height = $container.clientHeight;
    const width = $container.clientWidth;

    this.cameraPosition = new THREE.Vector3(20, 20, 20);

    this.logo = [
      this.createBox(),
      this.createBox(),
      this.createBox()
    ];

    this.logo.map((mesh, key) => {
      const distance = 5;
      mesh.geometry.translate(0, this.getMod(key) * distance, 0);
      return $scene.add(mesh);
    });

    this.setState({
      height,
      width
    });
  }

  getMod(index) {
    if(index === 1) {
      return 0;
    } else if(index === 2) {
      return 1;
    }

    return -1;
  }

  createBox() {
    const geometry = new THREE.BufferGeometry().fromGeometry(new THREE.BoxGeometry(5, 4.5, 10));
    geometry.computeVertexNormals();
    setUpBarycentricCoordinates(geometry);

    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      extensions: { derivatives: true }
    });

    return new THREE.Mesh(geometry, material);
  }

  onAnimate = () => {
    this.logo.map((mesh, index) => this.oscillateMesh(mesh, index));
  }

  oscillateMesh(mesh, index) {
    const time = this.clock.getElapsedTime();
    const {
      distance,
      duration
    } = this.state;

    if(time > duration) {
      // Flip the animation and reset the clock.
      this.clock.start();
      this.direction *= -1;
    }

    const translateValue = distance / (60 * duration) * this.direction * this.getMod(index);
    const translateY = ease.outCubic(time, 0, translateValue, duration);
    mesh.geometry.translate(0, translateY, 0);
  }

  render() {
    const { height, width } = this.state;
    const aspect = width / height;
    const d = 20;

    return (
      <div
        className={styles.wrapper}
        ref={(el) => { this.$container = el; }}
      >
        <React3
          antialias={true}
          pixelRatio={window.devicePixelRatio || 1}
          clearColor={0xDDDDDD}
          mainCamera="camera2"
          width={width}
          height={height}
          onAnimate={this.onAnimate}
        >
          <scene ref={(el) => { this.$scene = el; }}>
            <orthographicCamera
              name="camera2"
              left={-d * aspect}
              right={d * aspect}
              top={d}
              bottom={-d}
              near={0.1}
              far={1000}
              position={this.cameraPosition}
              lookAt={new THREE.Vector3(0,0,0)}
            />
          </scene>
        </React3>
      </div>
    );
  }

  state = {
    duration: 2,
    distance: 5,
    height: 100,
    width: 100
  }
}

export default BorderHighlight;
