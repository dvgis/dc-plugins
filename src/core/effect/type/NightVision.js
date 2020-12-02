/**
 * @Author: Caven
 * @Date: 2020-08-14 23:10:14
 */

const { State } = DC

const { Cesium } = DC.Namespace

class NightVision {
  constructor() {
    this._enable = false
    this._selected = []
    this.type = 'night_vision'
    this._state = State.INITIALIZED
  }

  set enable(enable) {
    this._enable = this._delegate.enabled = enable
    return this
  }

  get enable() {
    return this._enable
  }

  set selected(selected) {
    this._selected = this._delegate.selected = selected
    return this
  }

  get selected() {
    return this._selected
  }

  /**
   *
   * @private
   */
  _init() {
    this._delegate = Cesium.PostProcessStageLibrary.createNightVisionStage()
    this._delegate.enabled = this._enable
  }

  /**
   *
   * @param viewer
   * @returns {NightVision}
   */
  addTo(viewer) {
    if (!viewer) {
      return this
    }
    this._init()
    viewer.scene.postProcessStages.add(this._delegate)
    this._state = State.ADDED
    return this
  }
}

export default NightVision
