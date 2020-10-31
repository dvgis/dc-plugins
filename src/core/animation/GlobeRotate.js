/**
 * @Author: Caven
 * @Date: 2020-01-30 20:47:25
 */

const { Cesium } = DC.Namespace

class GlobeRotate {
  constructor(viewer, options = {}) {
    this._viewer = viewer
    this._speed = options.speed || 12 * 1000
    this._startRotate()
    let flag = setTimeout(() => {
      this._endRotate()
      options.callback && options.callback.call(options.context || this)
      clearTimeout(flag)
    }, Number(options.duration || 5) * 1e3)
  }

  /**
   * @param scene
   * @param time
   * @returns {boolean}
   * @private
   */
  _icrf(scene, time) {
    if (scene.mode !== Cesium.SceneMode.SCENE3D) {
      return false
    }
    let icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(time)
    if (Cesium.defined(icrfToFixed)) {
      let camera = this._viewer.camera
      let offset = Cesium.Cartesian3.clone(camera.position)
      let transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed)
      camera.lookAtTransform(transform, offset)
    }
  }

  /**
   * Start the rotation
   */
  _startRotate() {
    this._viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
    this._viewer.clock.multiplier = this._speed
    this._viewer.scene.postUpdate.addEventListener(this._icrf, this)
  }

  /**
   * End the rotation
   */
  _endRotate() {
    this._viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
    this._viewer.clock.multiplier = 1
    this._viewer.clock.currentTime = Cesium.JulianDate.now().clone()
    this._viewer.scene.postUpdate.removeEventListener(this._icrf, this)
  }

  /**
   *
   * @returns {GlobeRotate}
   */
  stop() {
    this._endRotate()
    return this
  }
}

export default GlobeRotate
