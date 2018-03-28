import * as THREE from 'three';
import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import { withRenderer } from '_components';

class IsoBob extends Component {
  render() {
    const { height, width } = this.props;

    return (
      <React3
        height={height}
        width={width}
        clearColor={0x444444}
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
            <meshBasicMaterial/>
            <icosahedronGeometry
              radius={10}
              detail={2}
            />
          </mesh>
        </scene>

      </React3>
    );
  }
}

export default withRenderer(IsoBob);
