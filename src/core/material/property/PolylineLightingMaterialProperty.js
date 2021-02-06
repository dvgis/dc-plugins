/**
 * @Author: Caven
 * @Date: 2021-01-13 20:52:47
 */

const { Cesium } = DC.Namespace

class PolylineLightingMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this._percent = undefined
    this._percentSubscription = undefined
    this.color = options.color || Cesium.Color.fromBytes(0, 255, 255, 255)
    this.percent = options.percent || 0.8
  }

  get isConstant() {
    return false
  }

  get definitionChanged() {
    return this._definitionChanged
  }

  getType(time) {
    return Cesium.Material.PolylineLightingType
  }

  getValue(time, result) {
    if (!result) {
      result = {}
    }
    result.color = Cesium.Property.getValueOrUndefined(this._color, time)
    result.percent = this._percent
    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof PolylineLightingMaterialProperty &&
        Cesium.Property.equals(this._color, other._color) &&
        Cesium.Property.equals(this._percent, other._percent))
    )
  }
}

Object.defineProperties(PolylineLightingMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  percent: Cesium.createPropertyDescriptor('percent')
})

export default PolylineLightingMaterialProperty
