/**
 * @Author: Caven
 * @Date: 2020-03-02 22:38:10
 */

const { Util, SceneEventType, Transform, Parse } = DC

const { Cesium } = DC.Namespace

class AroundPoint {
  constructor(viewer, position, options = {}) {
    if (!Util.checkViewer(viewer)) {
      throw new Error('AroundPoint：the viewer invalid')
    }
    this._viewer = viewer
    this._position = Parse.parsePosition(position)
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

  _start() {
    this._viewer.clock.currentTime = this._startTime.clone()
    this._viewer.on(SceneEventType.CLOCK_TICK, this._onTickHandler, this)
  }

  _onTickHandler() {
    let scene = this._viewer.scene
    let currentTime = this._viewer.clock.currentTime
    let diff = Cesium.JulianDate.secondsDifference(currentTime, this._startTime)
    let heading =
      Cesium.Math.toRadians(diff * (360 / this._duration)) + this._heading
    scene.camera.setView({
      destination: Transform.transformWGS84ToCartesian(this._position),
      orientation: {
        heading: heading,
        pitch: Cesium.Math.toRadians(this._options.pitch || 0)
      }
    })
    this._options.distance && scene.camera.moveBackward(this._options.distance)
    if (Cesium.JulianDate.compare(currentTime, this._stopTime) >= 0) {
      this._viewer.off(SceneEventType.CLOCK_TICK, this._onTickHandler, this)
      this._options.callback &&
        this._options.callback.call(this._options.context || this)
    }
  }
}

export default AroundPoint
