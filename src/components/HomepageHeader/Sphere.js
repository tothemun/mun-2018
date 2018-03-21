import React, { Component } from 'react';
import * as THREE from 'three';

class Sphere extends Component {
  onAnimate = () => {
    this.setState({
      sphereRotation: new THREE.Euler(
        this.state.sphereRotation.x - 0.001,
        this.state.sphereRotation.y - 0.001,
        0
      ),
      ringRotation: new THREE.Euler(
        this.state.sphereRotation.x + 0.002,
        this.state.sphereRotation.y + 0.002,
        0
      ),
    });
  };

  render() {
    const { ringRotation, sphereRotation } = this.state;

    return (
      <group>
        <mesh rotation={sphereRotation}>
          <icosahedronGeometry
            radius={.8}
            detail={1}
          />
          <meshPhongMaterial
            color={0xDDDDDD}
            shading={THREE.FlatShading}
          />
        </mesh>
        <mesh rotation={ringRotation}>
          <icosahedronGeometry
            radius={1}
            detail={1}
          />
          <meshBasicMaterial
            color={0xAAAAAAA}
            wireframe={true}
          />
        </mesh>
      </group>
    );
  }

  state = {
    sphereRotation: new THREE.Euler(),
    ringRotation: new THREE.Euler()
  };
}

export default Sphere;
