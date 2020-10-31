/**
 * @Author: Caven
 * @Date: 2020-03-02 23:14:20
 */

const { Cesium } = DC.Namespace

class AroundView {
  constructor(viewer, options = {}) {
    this._viewer = viewer
    this._heading = viewer.camera.heading
    this._startTime = Cesium.JulianDate.now()
    this._duration = options.duration || 10
    this._startAround()
    let flag = setTimeout(() => {
      this._endAround()
      options.callback && options.callback.call(options.context || this)
      clearTimeout(flag)
    }, Number(options.duration) * 1e3)
  }

  /**
   *
   * @private
   */
  _startAround() {
    this._viewer.clock.currentTime = this._startTime.clone()
    this._viewer.scene.postUpdate.addEventListener(this._onAround, this)
  }

  /**
   *
   * @private
   */
  _endAround() {
    this._viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
    this._viewer.clock.currentTime = Cesium.JulianDate.now().clone()
    this._viewer.scene.postUpdate.removeEventListener(this._onAround, this)
  }

  /**
   *
   * @param scene
   * @param time
   * @private
   */
  _onAround(scene, time) {
    let diff = Cesium.JulianDate.secondsDifference(time, this._startTime)
    let heading =
      Cesium.Math.toRadians(diff * (360 / this._duration)) + this._heading
    this._viewer.scene.camera.setView({
      orientation: {
        heading: heading
      }
    })
  }

  /**
   *
   * @returns {AroundView}
   */
  stop() {
    this._endAround()
    return this
  }
}

export default AroundView
