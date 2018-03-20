import * as THREE from 'three';
import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import frag from './water.frag';
import vert from './water.vert';
import styles from './WaterShader.css';

class WaterShader extends Component {
  componentWillMount() {
    this.clock = new THREE.Clock();
    this.timeUniform  ={
      iGlobalTime: {
        type: 'f',
        value: 0.1
      },
      iResolution: {
        type: 'v2',
        value: new THREE.Vector2()
      }
    }
  }

  componentDidMount() {
    const height = this.$container.clientHeight;
    const width = this.$container.clientWidth;

    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.timeUniform.iResolution.value.x = width;
    this.timeUniform.iResolution.value.y = height;

    this.setState({
      height,
      width
    });
  }

  onAnimate = () => {
    this.timeUniform.iGlobalTime.value += this.clock.getDelta();
  }

  render() {
    const { height, width } = this.state;

    return (
      <div
        className={styles.wrapper}
        ref={(input) => { this.$container = input; }}
      >
        <React3
          antialias={true}
          mainCamera="camera"
          width={width}
          height={height}
          onAnimate={this.onAnimate}
        >
        <scene>
          <perspectiveCamera
            name="camera"
            fov={30}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          />
          <mesh>
            <shaderMaterial
              uniforms={this.timeUniform}
              vertexShader={vert}
              fragmentShader={frag}
            />
            <planeBufferGeometry
              width={width}
              height={height}
              widthSegments={40}
              heightSegments={40}
            />
          </mesh>
          </scene>
        </React3>
      </div>
    )
  }

  state = {
    height: 100,
    width: 100
  };
}

export default WaterShader;
