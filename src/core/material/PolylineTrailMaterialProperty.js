/**
 * @Author: Caven
 * @Date: 2020-02-24 13:09:09
 */

const { Cesium } = DC.Namespace

const IMG = require('../images/line.png')

const DEF_COLOR = Cesium.Color.fromBytes(0, 255, 255, 255)

class PolylineTrailMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._image = undefined
    this._imageSubscription = undefined
    this._color = undefined
    this._colorSubscription = undefined
    this._speed = undefined
    this._speedSubscription = undefined
    this.color = options.color || DEF_COLOR
    this.speed = options.speed || 45
    this.image = IMG
  }

  get isConstant() {
    return false
  }

  get definitionChanged() {
    return this._definitionChanged
  }

  getType(time) {
    return Cesium.Material.PolylineTrailType
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

    result.image = Cesium.Property.getValueOrUndefined(this._image, time)

    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof PolylineTrailMaterialProperty &&
        Cesium.Property.equals(this._color, other._color) &&
        Cesium.Property.equals(this._speed, other._speed))
    )
  }
}

Object.defineProperties(PolylineTrailMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  speed: Cesium.createPropertyDescriptor('speed'),
  image: Cesium.createPropertyDescriptor('image')
})

export default PolylineTrailMaterialProperty
