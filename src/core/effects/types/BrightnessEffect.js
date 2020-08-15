/**
 * @Author: Caven
 * @Date: 2020-08-14 23:51:47
 */

import Effect from '../Effect'

const { State } = DC

const { Cesium } = DC.Namespace

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
    this._delegate = Cesium.PostProcessStageLibrary.createBrightnessStage()
    this._delegate.uniforms.brightness = this._brightness
  }

  /**
   *
   * @private
   */
  _addedHook() {
    this._delegate.enabled = true
  }
}

Effect.registerType('brightness')

export default BrightnessEffect
