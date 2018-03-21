import React, { Component } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';
import { withRenderer } from '_components';

class Rings extends Component {
  componentDidMount() {
    const { $container } = this;
    this.clock = new THREE.Clock();

    this.cameraPosition = new THREE.Vector3(10, 10, 10);

    for(let i = 0; i < 10; i++) {
      this.$rings.add(this.createRing(i));
    }
  }

  createRing(index) {
    const spacingBase = 0.5;
    const radiusBase = 2;
    const tubeRadius = .1;
    const segments = 32;

    const geometry = new THREE.TorusGeometry(radiusBase, tubeRadius, segments, segments);
    const material = new THREE.MeshBasicMaterial();

    geometry.translate(0, 0, spacingBase * index);

    return new THREE.Mesh(geometry, material);
  }

  onAnimate = () => {
    const delta = this.clock.getElapsedTime();

    this.$rings.children.map((ring, key) => {
      const translate = Math.cos(delta + key * 0.25) / 10;
      const scale = Math.sin(delta + key * 0.25);
      ring.scale.y = scale;
      ring.scale.x = scale;
      ring.position.z += translate;

      return ring;
    });
  }

  render() {
    const { height, width } = this.props;

    return (
      <React3
        antialias={true}
        pixelRatio={window.devicePixelRatio || 1}
        clearColor={0x333333}
        mainCamera="camera"
        width={width}
        height={height}
        onAnimate={this.onAnimate}
      >
        <scene ref={(el) => { this.$scene = el; }}>
          <perspectiveCamera
            name="camera"
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
            lookAt={new THREE.Vector3(0, 0, 0)}
          />
          <group ref={(el) => { this.$rings = el; }}>
          </group>
        </scene>
      </React3>
    );
  }
}

export default withRenderer(Rings);
