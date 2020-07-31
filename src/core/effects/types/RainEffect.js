/**
 * @Author: Caven
 * @Date: 2020-01-15 20:23:42
 */

import Effect from '../Effect'

const { State } = DC

const { Cesium } = DC.Namespace

const RainShader = require('../../shader/RainShader.glsl')

class RainEffect extends Effect {
  constructor(id) {
    super(id)
    this._addable = true
    this.type = Effect.getEffectType('rain')
    this._state = State.INITIALIZED
  }

  _mountedHook() {
    this._delegate = new Cesium.PostProcessStage({
      name: this._id,
      fragmentShader: RainShader
    })
  }
}

Effect.registerType('rain')

export default RainEffect
