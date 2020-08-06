/**
 * @Author: Caven
 * @Date: 2020-04-01 10:36:36
 */

import RoamingEventType from './RoamingEventType'

const { State } = DC

const { Cesium } = DC.Namespace

class RoamingController {
  constructor(viewer) {
    this._viewer = viewer
    this._postUpateRemoveCallback = undefined
    this._startTime = undefined
    this._duration = 0
    this._cache = {}
    this._viewMode = undefined
    this._viewOption = {}
  }

  get startTime() {
    return this._startTime
  }

  get duration() {
    return this._duration
  }

  /**
   * @private
   */
  _onPostUpdateHandler(scene, time) {
    Object.keys(this._cache).forEach(key => {
      let path = this._cache[key]
      path.roamingEvent &&
        path.roamingEvent.fire(RoamingEventType.POST_UPDATE, {
          currentTime: time,
          viewMode: this._viewMode,
          viewOption: this._viewOption
        })
    })
  }

  /**
   * Sets time range
   * @param startTime
   * @param endTime
   * @returns {RoamingController}
   */
  setTimeRange(startTime, endTime) {
    if (
      !startTime ||
      !endTime ||
      !(startTime instanceof Date) ||
      !(endTime instanceof Date) ||
      startTime > endTime
    ) {
      throw new Error('RoamingController: the time range invalid ')
    }
    this._startTime = Cesium.JulianDate.fromDate(startTime)
    endTime = Cesium.JulianDate.fromDate(endTime)
    this._duration = Cesium.JulianDate.secondsDifference(
      endTime,
      this._startTime
    )
    return this
  }

  /**
   * Sets time duration
   * @param startTime
   * @param duration
   * @returns {RoamingController}
   */
  setTimeDuration(startTime, duration) {
    if (!startTime || !(startTime instanceof Date)) {
      throw new Error('RoamingController: the time invalid ')
    }
    this._startTime = Cesium.JulianDate.fromDate(startTime)
    this._duration = duration
    return this
  }

  /**
   * Starts play all path
   * @returns {RoamingController}
   */
  play() {
    if (!this._startTime && !(this._startTime instanceof Cesium.JulianDate)) {
      throw new Error('RoamingController: time not set ')
    }
    this._viewer.clock.shouldAnimate = true
    this._viewer.clock.currentTime = this._startTime
    this._postUpateRemoveCallback && this._postUpateRemoveCallback()
    this._postUpateRemoveCallback = this._viewer.scene.postUpdate.addEventListener(
      this._onPostUpdateHandler,
      this
    )
    return this
  }

  /**
   *
   */
  pause() {
    this._viewer.clock.shouldAnimate = false
    return this
  }

  /**
   *
   */
  restore() {
    this._viewer.clock.shouldAnimate = true
    return this
  }

  /**
   *
   * @param speed
   * @returns {RoamingController}
   */
  changeSpeed(speed) {
    this._viewer.clock.multiplier = speed
    return this
  }

  /**
   * Adds a path
   * @param path
   * @returns {RoamingController}
   */
  addPath(path) {
    if (path && path.roamingEvent && path.state !== State.ADDED) {
      path.roamingEvent.fire(RoamingEventType.ADD, this)
      this._cache[path.id] = path
    }
    return this
  }

  /**
   * Returns a path
   * @param id
   * @returns {*|undefined}
   */
  getPath(id) {
    return this._cache[id] || undefined
  }

  /**
   * removes a path
   * @param path
   * @returns {RoamingController}
   */
  removePath(path) {
    if (path && path.roamingEvent && path.state !== State.REMOVED) {
      path.roamingEvent.fire(RoamingEventType.REMOVE, this)
      delete this._cache[path.id]
    }
    return this
  }

  /**
   *
   * @returns {RoamingController}
   */
  clearPath() {
    Object.keys(this._cache).forEach(key => {
      let path = this._cache(key)
      path && this.removePath(path)
    })
    return this
  }

  /**
   *
   * @param path
   * @param viewMode
   * @param viewOption
   * @returns {RoamingController}
   */
  trackedPath(path, viewMode, viewOption = {}) {
    if (!this._cache[path.id]) {
      throw new Error('RoamingController: path does not add ')
    }
    this._viewMode = viewMode
    this._viewOption = viewOption
    path.roamingEvent &&
      path.roamingEvent.fire(RoamingEventType.ACTIVE, path.id)
    return this
  }
}

export default RoamingController
