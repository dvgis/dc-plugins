/**
 * @Author: Caven
 * @Date: 2020-03-02 23:14:20
 */

const { Cesium } = DC.Namespace

class AroundView {
  constructor(viewer, options = {}) {
    this._viewer = viewer
    this._heading = viewer.camera.heading
    this._options = options
    this._startTime = Cesium.JulianDate.now()
    this._aroundAmount = 0.2
  }

  set aroundAmount(aroundAmount) {
    this._aroundAmount = aroundAmount
    return this
  }

  /**
   *
   * @private
   */
  _bindEvent() {
    this._viewer.clock.currentTime = this._startTime.clone()
    this._viewer.clock.onTick.addEventListener(this._onAround, this)
  }

  /**
   *
   * @private
   */
  _unbindEvent() {
    this._viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
    this._viewer.clock.currentTime = Cesium.JulianDate.now().clone()
    this._viewer.clock.onTick.removeEventListener(this._onAround, this)
  }

  /**
   *
   * @param scene
   * @param time
   * @private
   */
  _onAround(scene, time) {
    this._heading += Cesium.Math.toRadians(this._aroundAmount)
    if (this._heading >= Math.PI * 2 || this._heading <= -Math.PI * 2) {
      this._heading = 0
    }
    this._viewer.scene.camera.setView({
      orientation: {
        heading: this._heading
      }
    })
  }

  /**
   *
   * @returns {AroundView}
   */
  start() {
    if (this._options.duration) {
      let timer = setTimeout(() => {
        this._unbindEvent()
        this._options.callback &&
          this._options.callback.call(this._options.context || this)
        clearTimeout(timer)
      }, Number(this._options.duration) * 1e3)
    }
    this._bindEvent()
    return this
  }

  /**
   *
   * @returns {AroundView}
   */
  stop() {
    this._unbindEvent()
    return this
  }
}

export default AroundView
