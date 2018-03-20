import React, { Component } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';
import styles from './Ellipse.css';

class Ellipse extends Component {
  componentDidMount() {
    const { $scene, $container } = this;

    const height = $container.clientHeight;
    const width = $container.clientWidth;

    this.cameraPosition = new THREE.Vector3(50, 10, 200);

    this.setState({
      height,
      width
    });
  }

  onAnimate = () => {
    this.setState({
      sphereRotation: new THREE.Euler(
        this.state.sphereRotation.x + 0.01,
        this.state.sphereRotation.y + 0.05,
        0
      )
    });
  }

  render() {
    const { height, width } = this.state;

    return (
      <div
        className={styles.wrapper}
        ref={(el) => { this.$container = el; }}
      >
        <React3
          antialias={true}
          pixelRatio={window.devicePixelRatio || 1}
          clearColor={0x333333}
          mainCamera="camera"
          width={width}
          height={height}
          onAnimate={this.onAnimate}
        >
          <scene>
            <perspectiveCamera
              name="camera"
              fov={75}
              aspect={width / height}
              near={0.1}
              far={1000}
              position={this.cameraPosition}
              lookAt={new THREE.Vector3(0, 0, 0)}
            />
            <pointLight
              color={0xFFFFFF}
              position={new THREE.Vector3(20, 1000, 570)}
            />
            <mesh rotation={this.state.sphereRotation}>
              <sphereGeometry
                radius={50}
                widthSegments={32}
                heightSegments={2}
                phiStart={6}
                phiLength={Math.PI * 2}
                thetaStart={0.1}
                thetaLength={0.9}
              />
              <meshLambertMaterial
                color={0xccaa00}
                emissive={0xd94848}
                wireframe={true}
                wireframeLinewidth={1.5}
                vertexColors={THREE.FaceColors}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          </scene>
        </React3>
      </div>
    );
  }

  state = {
    width: 100,
    height: 100,
    sphereRotation: new THREE.Euler()
  };
}

export default Ellipse;
