import { Elastic, TimelineMax } from 'gsap';
import * as THREE from 'three';
import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import { withRenderer } from '_components';

class Timeline extends Component {
  componentDidMount() {
    this.cameraPosition = new THREE.Vector3(500, 500, 500);

    const tl = new TimelineMax({ repeat: -1 ,repeatDelay:0.5 });
		tl.to(this.$box.rotation, 2, {
        x: -Math.PI,
        y: -Math.PI,
        ease: Elastic.easeOut
      })
      .to(this.$box.scale, 2, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        ease: Elastic.easeOut
      }, '=-1.95')
      .to(this.$box.scale, 2, {
        x: 1,
        y: 1,
        z: 1,
        ease: Elastic.easeOut
      })
      .to(this.$box.rotation, 2, {
        x: 0,
        y: 0,
        z: 0,
        ease: Elastic.easeOut
      }, '=-1.95');
  }

  render() {
    const { height, width } = this.props;
    const aspect = width / height;
    const d = 20;

    return (
      <React3
        antialias={true}
        clearColor={0xFFFFFF}
        height={height}
        mainCamera="camera"
        onAnimate={this.onAnimate}
        pixelRatio={window.devicePixelRatio || 1}
        shadowMapEnabled={true}
        shadowMapType={THREE.PCFSoftShadowMap}
        width={width}
      >
        <scene ref={(el) => { this.$scene = el; }}>
          <orthographicCamera
            position={this.cameraPosition}
            lookAt={new THREE.Vector3(0,0,0)}
            name="camera"
            near={0.1}
            far={1000}
            top={d}
            right={d * aspect}
            bottom={-d}
            left={-d * aspect}
          />
          <directionalLight
            castShadow={true}
            intensity={1}
            position={new THREE.Vector3(0, 50, 0)}
            lookAt={new THREE.Vector3(0, 0, 0)}
            shadowDarkness={1}
          />
          <directionalLight
            intensity={1}
            position={new THREE.Vector3(60, 100, 20)}
            lookAt={new THREE.Vector3(0, 0, 0)}
          />
          <directionalLight
            intensity={0.8}
            position={new THREE.Vector3(-40, 100, 20)}
            lookAt={new THREE.Vector3(0, 0, 0)}
          />

          <ambientLight
            intensity={0.2}
            position={new THREE.Vector3(0, -100, 0)}
          />
          <mesh
            position={new THREE.Vector3(0, -15, 0)}
            rotation={new THREE.Euler(90*Math.PI/180, 0, 0)}
            receiveShadow={true}
          >
            <planeGeometry
              height={500}
              width={500}
            />
            <meshPhongMaterial
              color={0x202020}
              side={THREE.DoubleSide}
            />
          </mesh>
          <mesh ref={el => this.$box = el} castShadow={true}>
            <boxGeometry
              height={5}
              width={5}
              depth={5}
            />
            <meshLambertMaterial color={0xF9F8ED} shading={THREE.FlatShading}/>
          </mesh>
        </scene>
      </React3>
    );
  }
}

export default withRenderer(Timeline);
