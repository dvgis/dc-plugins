/**
 * @Author: Caven
 * @Date: 2020-02-26 23:05:44
 */

import Effect from '../Effect'

const { State } = DC

const { Cesium } = DC.Namespace

const FogShader = require('../../shader/FogShader.glsl')

class FogEffect extends Effect {
  constructor(id, color, strength = 1) {
    super(id)
    this._strength = strength || 1
    this._color = color || new Cesium.Color(0.8, 0.8, 0.8, 0.5)
    this._addable = true
    this.type = Effect.getEffectType('fog')
    this._state = State.INITIALIZED
  }

  /**
   *
   * @private
   */
  _mountedHook() {
    let _this = this
    this._delegate = new Cesium.PostProcessStage({
      name: this._id,
      fragmentShader: FogShader,
      uniforms: {
        strength: () => {
          return _this._strength
        },
        fogcolor: () => {
          return _this._color
        }
      }
    })
  }
}

Effect.registerType('fog')

export default FogEffect
