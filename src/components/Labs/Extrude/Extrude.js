import { Power3, TimelineMax } from 'gsap';
import * as THREE from 'three';
import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import { withRenderer } from '_components';

class Timeline extends Component {
  componentDidMount() {
    this.cameraPosition = new THREE.Vector3(-500, 500, 500);
    this.tl = new TimelineMax({ repeat: -1 ,repeatDelay: 0.5, yoyo: true });
    this.tl.to(this.$boxes.scale, 2, {
        y: 1500,
        ease: Power3.easeInOut
      });

    this.tl.play();
  }

  onAnimate = () => {
    const { pauseRender } = this.props;
    if (pauseRender) return;
    // if(pauseRender) {
    //   this.tl.pause();
    // } else {
    //   this.tl.play();
    // }
  }

  render() {
    const { height, width } = this.props;
    const aspect = width / height;
    const d = 20;
    const spacing = 5;

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
            position={new THREE.Vector3(50, 50, -50)}
            lookAt={new THREE.Vector3(0, 0, 0)}
          />
          <ambientLight
            intensity={0.2}
            position={new THREE.Vector3(0, -100, 0)}
          />
          <mesh
            position={new THREE.Vector3(0, -.01, 0)}
            rotation={new THREE.Euler(90*Math.PI/180, 0, 0)}
            receiveShadow={true}
          >
            <planeGeometry
              height={500}
              width={500}
            />
            <meshPhongMaterial
            color={0x222222}
              side={THREE.DoubleSide}
            />
          </mesh>
          <group ref={el => this.$boxes = el}>
            <mesh castShadow={true} position={new THREE.Vector3(-spacing, 0, -spacing)}>
              <boxGeometry
                height={0.01}
                width={5}
                depth={5}
              />
              <meshLambertMaterial color={0xF9F8ED} shading={THREE.FlatShading}/>
            </mesh>

          </group>
        </scene>
      </React3>
    );
  }
}

export default withRenderer(Timeline);
