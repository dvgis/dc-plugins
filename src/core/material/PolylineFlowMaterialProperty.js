/*
 * @Author: Caven
 * @Date: 2020-02-24 13:53:52
 * @Last Modified by: Caven
 * @Last Modified time: 2020-06-22 21:34:56
 */

const { Cesium } = DC.Namespace

class PolylineFlowMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this.color = options.color || Cesium.Color.fromBytes(0, 255, 255, 255)
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
      Cesium.Color.WHITE,
      result.color
    )
    result.speed = this._speed
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
