import * as THREE from 'three';
import { getRandomFloat } from '_utils';
import { PerlinNoise } from '_utils';
import { map } from '_utils/Math';

const noiseOndulation = 200;
const noiseVariation = 1000;
const noiseInterval = 250;
const noiseResistance = 1000;

class Particle {
  constructor(_x, _y, _maxSpeed, _maxForce, _frame) {
    this.perlinNoise = new PerlinNoise();
    this.pos = new THREE.Vector2(_x, _y);
    this.acc = new THREE.Vector2(0,0);
    this.vel = new THREE.Vector2(0,0);
    this.maxForce = _maxForce;
    this.maxSpeed = _maxSpeed;
    this.frame = _frame;
    this.birth = _frame;
    this.lifeSpan = getRandomFloat(600, 1800);
  }

  getNoiseInput(value) {
    return value / noiseOndulation + noiseVariation;
  }

  /**
   * Calculates the noise angle in a given position
   * @param | _x | Current position on the x axis
   * @param | _y | Current position on the y axis
   *
   * @return Float | Noise angle
   */
  getNoiseAngle = (_x, _y) => {
    const { frame } = this;
    const noiseValue = this.perlinNoise.noise(this.getNoiseInput(_x), this.getNoiseInput(_y), this.getNoiseInput(frame));
    return map(noiseValue, 0, 1, 0, Math.PI * 2);
  }

  /**
  * Sets acceleration to follow the noise flow
  */
  flow = (frame) => {
    const {
      vel,
      pos,
      maxForce,
      maxSpeed
    } = this;

    this.frame = frame;

    const noiseAngle = this.getNoiseAngle(pos.x, pos.y);
    const desired = new THREE.Vector2(Math.cos(noiseAngle) * noiseResistance, Math.sin(noiseAngle) * noiseResistance);
    desired.multiplyScalar(maxSpeed);
    const steer = desired.sub(vel);
    steer.clampScalar(-maxForce, maxForce);
    this.acc.add(steer);
    this.update();
  }

  isDead = () => {
    return this.frame - this.birth > this.lifeSpan;
  }

  update = () => {
    const { acc, maxSpeed, pos, vel } = this;
    vel.add(acc);
    vel.clampScalar(-maxSpeed, maxSpeed);
    pos.add(vel);
    acc.multiplyScalar(0);
  }
}

export default Particle;
