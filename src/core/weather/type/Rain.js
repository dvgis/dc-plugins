/**
 * @Author: Caven
 * @Date: 2020-01-15 20:23:42
 */

const { State, Util } = DC

const { Cesium } = DC.Namespace

const RainShader = require('../../shader/RainShader.glsl')

class Rain {
  constructor() {
    this._id = Util.uuid()
    this._viewer = undefined
    this._delegate = undefined
    this._enable = false
    this._speed = 10.0
    this.type = 'rain'
    this._state = State.INITIALIZED
  }

  set enable(enable) {
    this._enable = enable
    if (enable && !this._delegate && this._viewer) {
      this._createPostProcessStage()
      this._viewer.scene.postProcessStages.add(this._delegate)
    }
    this._delegate && (this._delegate.enabled = enable)
    return this
  }

  get enable() {
    return this._enable
  }

  set speed(speed) {
    this._speed = this._delegate.uniforms.speed = speed
    return this
  }

  get speed() {
    return this._speed
  }

  /**
   *
   * @private
   */
  _createPostProcessStage() {
    this._delegate = new Cesium.PostProcessStage({
      name: this._id,
      fragmentShader: RainShader,
      uniforms: {
        speed: this._speed
      }
    })
  }

  /**
   *
   * @param viewer
   * @returns {Rain}
   */
  addTo(viewer) {
    if (!viewer) {
      return this
    }
    this._viewer = viewer
    this._state = State.ADDED
    return this
  }
}

export default Rain
