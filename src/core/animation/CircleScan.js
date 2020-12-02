/**
 * @Author: Caven
 * @Date: 2020-12-01 20:26:02
 */

const { State, Transform, Position, Parse, Util } = DC

const { Cesium } = DC.Namespace

const CircleScanShader = require('../shader/CircleScanShader.glsl')

class CircleScan {
  constructor(viewer, position, radius, options = {}) {
    this._viewer = viewer
    this._position = Parse.parsePosition(position)
    this._radius = radius || 100
    this._color = Cesium.defaultValue(options.color, Cesium.Color.RED)
    this._duration = Cesium.defaultValue(options.duration, 1) * 1e3
    this.type = 'circle_scan'
    this._init()

    this._state = State.INITIALIZED
  }

  /**
   *
   * @private
   */
  _init() {
    let cartesian3Center = Transform.transformWGS84ToCartesian(this._position)
    let cartesian4Center = new Cesium.Cartesian4(
      cartesian3Center.x,
      cartesian3Center.y,
      cartesian3Center.z,
      1
    )
    let cartesian3Center1 = Transform.transformWGS84ToCartesian(
      new Position(
        this._position.lng,
        this._position.lat,
        this._position.alt + 500
      )
    )
    let cartesian4Center1 = new Cesium.Cartesian4(
      cartesian3Center1.x,
      cartesian3Center1.y,
      cartesian3Center1.z,
      1
    )

    let _time = new Date().getTime()
    this._viewer.scene.postProcessStages.add(
      new Cesium.PostProcessStage({
        name: Util.uuid(),
        fragmentShader: CircleScanShader,
        uniforms: {
          u_scanCenterEC: () => {
            return Cesium.Matrix4.multiplyByVector(
              this._viewer.delegate.camera._viewMatrix,
              cartesian4Center,
              new Cesium.Cartesian4()
            )
          },
          u_scanPlaneNormalEC: () => {
            let temp = Cesium.Matrix4.multiplyByVector(
              this._viewer.delegate.camera._viewMatrix,
              cartesian4Center,
              new Cesium.Cartesian4()
            )
            let temp1 = Cesium.Matrix4.multiplyByVector(
              this._viewer.delegate.camera._viewMatrix,
              cartesian4Center1,
              new Cesium.Cartesian4()
            )
            let _scratchCartesian3Normal = new Cesium.Cartesian3()
            _scratchCartesian3Normal.x = temp1.x - temp.x
            _scratchCartesian3Normal.y = temp1.y - temp.y
            _scratchCartesian3Normal.z = temp1.z - temp.z
            Cesium.Cartesian3.normalize(
              _scratchCartesian3Normal,
              _scratchCartesian3Normal
            )
            return _scratchCartesian3Normal
          },
          u_radius: () => {
            return (
              (this._radius *
                ((new Date().getTime() - _time) % this._duration)) /
              this._duration
            )
          },
          u_scanColor: this._color
        }
      })
    )
  }
}

export default CircleScan
