/**
 * @Author: Caven
 * @Date: 2020-02-26 10:15:55
 */

const { Cesium } = DC.Namespace

class PolylineEmissionMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this.color = options.color || Cesium.Color.fromBytes(0, 255, 255, 255)
  }

  get isConstant() {
    return false
  }

  get definitionChanged() {
    return this._definitionChanged
  }

  getType(time) {
    return Cesium.Material.PolylineEmissionType
  }

  getValue(time, result) {
    if (!result) {
      result = {}
    }
    result.color = Cesium.Property.getValueOrUndefined(this._color, time)
    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof PolylineEmissionMaterialProperty &&
        Cesium.Property.equals(this._color, other._color))
    )
  }
}

Object.defineProperties(PolylineEmissionMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color')
})

export default PolylineEmissionMaterialProperty
