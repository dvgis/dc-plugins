/**
 * @Author: Caven
 * @Date: 2020-03-02 23:14:20
 */

const { Cesium } = DC.Namespace

class AroundView {
  constructor(viewer, options = {}) {
    this._viewer = viewer
    this._options = options
    this._heading = viewer.camera.heading
    this._startTime = Cesium.JulianDate.now()
    this._duration = this._options.duration || 10
    this._stopTime = Cesium.JulianDate.addSeconds(
      this._startTime,
      this._duration,
      new Cesium.JulianDate()
    )
    this._start()
  }

  /**
   *
   * @private
   */
  _start() {
    this._viewer.clock.currentTime = this._startTime.clone()
    this._viewer.scene.postUpdate.addEventListener(
      this._onPostUpdateHandler,
      this
    )
  }

  /**
   *
   * @param scene
   * @param time
   * @private
   */
  _onPostUpdateHandler(scene, time) {
    let diff = Cesium.JulianDate.secondsDifference(time, this._startTime)
    let heading =
      Cesium.Math.toRadians(diff * (360 / this._duration)) + this._heading
    this._viewer.scene.camera.setView({
      orientation: {
        heading: heading
      }
    })
    if (Cesium.JulianDate.compare(time, this._stopTime) >= 0) {
      this._viewer.scene.postUpdate.removeEventListener(
        this._onPostUpdateHandler,
        this
      )
      this._options.callback &&
        this._options.callback.call(this._options.context || this)
    }
  }
}

export default AroundView
