/**
 * @Author: Caven
 * @Date: 2021-01-09 20:21:33
 */

import Animation from '../Animation'
const { Transform, Parse } = DC

const { Cesium } = DC.Namespace

class Flying extends Animation {
  constructor(viewer, options = {}) {
    super(viewer)
    this._options = options
    this._positions = []
    this._durations = [3]
    this._currentIndex = 0
  }

  set positions(positions) {
    this._positions = Parse.parsePositions(positions)
    return this
  }

  get positions() {
    return this._positions
  }

  set durations(durations) {
    this._durations = durations
    return this
  }

  get durations() {
    return this._durations
  }

  /**
   *
   * @private
   */
  _cameraFly() {
    let self = this
    let camera = this._viewer.camera
    let position = this._positions[this._currentIndex]
    let callback = () => {
      let nextPosition = self._positions[self._currentIndex + 1]
      if (nextPosition) {
        self._currentIndex++
        if (self._currentIndex <= self._positions.length - 1) {
          self._cameraFly()
        }
      } else if (!nextPosition && self._options.loop) {
        self._currentIndex = 0
        self._cameraFly()
      }
    }
    if (position) {
      camera.flyTo({
        destination: Transform.transformWGS84ToCartesian(position),
        orientation: {
          heading: Cesium.Math.toRadians(position.heading),
          pitch: Cesium.Math.toRadians(position.pitch),
          roll: Cesium.Math.toRadians(position.roll)
        },
        complete: callback,
        duration:
          this._durations.length === 1
            ? this._durations[0]
            : this._durations[this._currentIndex]
      })
    }
  }

  /**
   *
   * @returns {Flying}
   */
  start() {
    if (this._positions && this._positions.length) {
      this._currentIndex = 0
      this._cameraFly()
    }
    return this
  }

  /**
   *
   * @returns {Flying}
   */
  pause() {
    this._viewer.camera.cancelFlight()
    return this
  }

  /**
   *
   * @returns {Flying}
   */
  restore() {
    if (this._positions && this._positions.length) {
      this._cameraFly()
    }
    return this
  }
}

export default Flying
