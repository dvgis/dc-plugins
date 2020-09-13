/**
 * @Author: Caven
 * @Date: 2020-01-15 20:23:42
 */

import Effect from '../Effect'

const { State } = DC

const { Cesium } = DC.Namespace

const RainShader = require('../../shader/RainShader.glsl')

class RainEffect extends Effect {
  constructor(id, speed) {
    super(id)
    this._addable = true
    this._speed = speed || 10.0
    this.type = Effect.getEffectType('rain')
    this._state = State.INITIALIZED
  }

  set speed(speed) {
    this._speed = speed
    if (this._delegate) {
      this._delegate.uniforms.speed = this._speed
    }
  }

  get speed() {
    return this._speed
  }

  /**
   *
   * @private
   */
  _mountedHook() {
    this._delegate = new Cesium.PostProcessStage({
      name: this._id,
      fragmentShader: RainShader,
      uniforms: {
        speed: this._speed
      }
    })
  }
}

Effect.registerType('rain')

export default RainEffect
