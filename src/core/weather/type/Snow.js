/**
 * @Author: Caven
 * @Date: 2020-01-15 20:23:46
 */

const { State, Util } = DC

const { Cesium } = DC.Namespace

const SnowShader = require('../../shader/SnowShader.glsl')

class Snow {
  constructor() {
    this._id = Util.uuid()
    this._delegate = undefined
    this._enable = false
    this._speed = 10.0
    this.type = 'snow'
    this._state = State.INITIALIZED
  }

  set enable(enable) {
    this._enable = enable
    this._delegate.enabled = this._enable
    return this
  }

  get enable() {
    return this._enable
  }

  set speed(speed) {
    this._speed = speed
    this._delegate.uniforms.speed = this._speed
    return this
  }

  get speed() {
    return this._speed
  }

  /**
   *
   * @private
   */
  _init() {
    this._delegate = new Cesium.PostProcessStage({
      name: this._id,
      fragmentShader: SnowShader,
      uniforms: {
        speed: this._speed
      }
    })
    this._delegate.enabled = this._enable
  }

  /**
   *
   * @param viewer
   * @returns {Snow}
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

export default Snow
