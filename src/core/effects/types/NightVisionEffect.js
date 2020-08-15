/**
 * @Author: Caven
 * @Date: 2020-08-14 23:10:14
 */

import Effect from '../Effect'

const { State } = DC

const { Cesium } = DC.Namespace

class NightVisionEffect extends Effect {
  constructor(id) {
    super(id)
    this.type = Effect.getEffectType('night_vision')
    this._addable = true
    this._state = State.INITIALIZED
  }

  /**
   *
   * @private
   */
  _mountedHook() {
    this._delegate = Cesium.PostProcessStageLibrary.createNightVisionStage()
  }

  /**
   *
   * @private
   */
  _addedHook() {
    this._delegate.enabled = true
  }
}

Effect.registerType('night_vision')

export default NightVisionEffect
