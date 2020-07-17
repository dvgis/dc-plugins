/*
 * @Author: Caven
 * @Date: 2020-02-24 13:53:52
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-17 22:22:24
 */

const { Cesium } = DC.Namespace

const DEF_COLOR = Cesium.Color.fromBytes(0, 255, 255, 255)

class PolylineFlowMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this.color = options.color || DEF_COLOR
    this._speed = undefined
    this._speedSubscription = undefined
    this.speed = options.speed || 45
  }

  get isConstant() {
    return false
  }

  get definitionChanged() {
    return this._definitionChanged
  }

  getType(time) {
    return Cesium.Material.PolylineFlowType
  }

  getValue(time, result) {
    if (!result) {
      result = {}
    }
    result.color = Cesium.Property.getValueOrClonedDefault(
      this._color,
      time,
      DEF_COLOR,
      result.color
    )
    result.speed = Cesium.Property.getValueOrClonedDefault(
      this._speed,
      time,
      45,
      result.speed
    )

    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof PolylineFlowMaterialProperty &&
        Cesium.Property.equals(this._color, other._color))
    )
  }
}

Object.defineProperties(PolylineFlowMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  speed: Cesium.createPropertyDescriptor('speed')
})

export default PolylineFlowMaterialProperty
