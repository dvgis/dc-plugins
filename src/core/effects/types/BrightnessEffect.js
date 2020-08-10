/**
 * @Author: Caven
 * @Date: 2020-08-10 19:16:09
 */

import Effect from '../Effect'

const { State } = DC

const { Cesium } = DC.Namespace

const BrightnessShader = require('../../shader/BrightnessShader.glsl')

class BrightnessEffect extends Effect {
  constructor(id, brightness) {
    super(id)
    this._brightness = brightness || 2
    this._addable = true
    this.type = Effect.getEffectType('brightness')
    this._state = State.INITIALIZED
  }

  set brightness(brightness) {
    this._brightness = brightness
    if (this._delegate) {
      this._delegate.uniforms.brightness = this._brightness
    }
  }

  /**
   *
   * @private
   */
  _mountedHook() {
    this._delegate = new Cesium.PostProcessStage({
      name: this._id,
      fragmentShader: BrightnessShader,
      uniforms: {
        brightness: () => {
          return this._brightness
        }
      }
    })
  }
}

Effect.registerType('brightness')

export default BrightnessEffect
