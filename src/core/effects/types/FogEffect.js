/**
 * @Author: Caven
 * @Date: 2020-02-26 23:05:44
 */

import Effect from '../Effect'

const { State } = DC

const { Cesium } = DC.Namespace

const FogShader = require('../../shader/FogShader.glsl')

class FogEffect extends Effect {
  constructor(id, fogColor, fogByDistance) {
    super(id)
    this._fogByDistance = fogByDistance
    this._fogColor = fogColor || new Cesium.Color(0.8, 0.8, 0.8, 0.5)
    this._addable = true
    this.type = Effect.getEffectType('fog')
    this._state = State.INITIALIZED
  }

  set fogByDistance(fogByDistance) {
    this._fogByDistance = fogByDistance
    this._delegate.uniforms.fogByDistance = new Cesium.Cartesian4(
      this._fogByDistance?.near || 10,
      this._fogByDistance?.nearValue || 0.0,
      this._fogByDistance?.far || 200,
      this._fogByDistance?.farValue || 1.0
    )
  }

  set fogColor(fogColor) {
    this._fogColor = fogColor
    this._delegate.uniforms.fogColor = this._fogColor
  }

  /**
   *
   * @private
   */
  _mountedHook() {
    this._delegate = new Cesium.PostProcessStage({
      name: this._id,
      fragmentShader: FogShader,
      uniforms: {
        fogByDistance: new Cesium.Cartesian4(
          this._fogByDistance?.near || 10,
          this._fogByDistance?.nearValue || 0.0,
          this._fogByDistance?.far || 200,
          this._fogByDistance?.farValue || 1.0
        ),
        fogColor: this._fogColor
      }
    })
  }
}

Effect.registerType('fog')

export default FogEffect
