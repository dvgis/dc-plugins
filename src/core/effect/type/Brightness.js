/**
 * @Author: Caven
 * @Date: 2020-08-14 23:51:47
 */

const { State } = DC

const { Cesium } = DC.Namespace

class Brightness {
  constructor() {
    this._enable = false
    this._intensity = 1
    this._selected = []
    this.type = 'brightness'
    this._state = State.INITIALIZED
  }

  set enable(enable) {
    this._enable = enable
    this._delegate.enabled = enable
    return this
  }

  get enable() {
    return this._enable
  }

  set intensity(intensity) {
    this._intensity = this._delegate.uniforms.brightness = intensity
    return this
  }

  get intensity() {
    return this._intensity
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
    this._delegate = Cesium.PostProcessStageLibrary.createBrightnessStage()
    this._delegate.uniforms.brightness = this._intensity
    this._delegate.enabled = this._enable
  }

  /**
   *
   * @param viewer
   * @returns {Brightness}
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

export default Brightness
