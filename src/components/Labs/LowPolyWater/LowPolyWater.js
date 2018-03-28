import * as THREE from 'three';
import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import { withRenderer } from '_components';
import LowPolyWaterFrag from './lowpolywater.frag';
import LowPolyWaterVert from './lowpolywater.vert';

class LowPolyWater extends Component {
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
    this.cameraPosition = new THREE.Vector3(50, 50, 50);

    this.timeUniform.iResolution.value.x = 100;
    this.timeUniform.iResolution.value.y = 1000;
  }

  onAnimate = () => {
    const { height, width } = this.props;

    this.timeUniform.iGlobalTime.value += this.clock.getDelta();
    this.timeUniform.iResolution.value.x = width;
    this.timeUniform.iResolution.value.y = height;
  }

  render() {
    const { height, width } = this.props;

    return (
      <React3
        pixelRatio={window.devicePixelRatio || 1}
        antialias={true}
        mainCamera="camera"
        width={width}
        height={height}
        onAnimate={this.onAnimate}
        clearColor={0x444444}
      >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
          lookAt={new THREE.Vector3(0,0,0)}
        />
        <mesh>
          <shaderMaterial
            uniforms={this.timeUniform}
            vertexShader={LowPolyWaterVert}
            fragmentShader={LowPolyWaterFrag}
          />
          <planeGeometry
            width={20}
            height={20}
          />
        </mesh>
        </scene>
      </React3>
    )
  }
}

export default withRenderer(LowPolyWater);
