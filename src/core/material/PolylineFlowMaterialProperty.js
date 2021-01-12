/**
 * @Author: Caven
 * @Date: 2020-02-24 13:53:52
 */

const { Cesium } = DC.Namespace

class PolylineFlowMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this._speed = undefined
    this._speedSubscription = undefined
    this._percent = undefined
    this._percentSubscription = undefined
    this._gradient = undefined
    this._gradientSubscription = undefined
    this.color = options.color || Cesium.Color.fromBytes(0, 255, 255, 255)
    this.speed = options.speed || 1
    this.percent = options.percent || 0.03
    this.gradient = options.gradient || 0.1
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
    result.color = Cesium.Property.getValueOrUndefined(this._color, time)
    result.speed = this._speed
    result.percent = this._percent
    result.gradient = this._gradient
    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof PolylineFlowMaterialProperty &&
        Cesium.Property.equals(this._color, other._color) &&
        Cesium.Property.equals(this._speed, other._speed) &&
        Cesium.Property.equals(this._percent, other._percent) &&
        Cesium.Property.equals(this._gradient, other._gradient))
    )
  }
}

Object.defineProperties(PolylineFlowMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  speed: Cesium.createPropertyDescriptor('speed'),
  percent: Cesium.createPropertyDescriptor('percent'),
  gradient: Cesium.createPropertyDescriptor('gradient')
})

export default PolylineFlowMaterialProperty
