/**
 * @Author: Caven
 * @Date: 2020-03-02 22:38:10
 */

const { Transform, Parse } = DC

const { Cesium } = DC.Namespace

class AroundPoint {
  constructor(viewer, position, options = {}) {
    this._viewer = viewer
    this._position = Parse.parsePosition(position)
    this._options = options
    this._duration = options.duration || 10
    this._heading = viewer.camera.heading
    this._startTime = Cesium.JulianDate.now()
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
    scene.camera.lookAt(
      Transform.transformWGS84ToCartesian(this._position),
      new Cesium.HeadingPitchRange(
        heading,
        Cesium.Math.toRadians(this._options.pitch || 0),
        this._options.range || 1000
      )
    )
  }

  /**
   *
   * @returns {AroundPoint}
   */
  stop() {
    this._endAround()
    return this
  }
}

export default AroundPoint
