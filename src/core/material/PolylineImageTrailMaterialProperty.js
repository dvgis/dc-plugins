/**
 * @Author: Caven
 * @Date: 2020-07-17 22:15:56
 */

const { Cesium } = DC.Namespace

const DEF_REPEAT = new Cesium.Cartesian2(1, 1)

const DEF_COLOR = Cesium.Color.fromBytes(0, 255, 255, 255)

class PolylineImageTrailMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this._speed = undefined
    this._speedSubscription = undefined
    this._image = undefined
    this._imageSubscription = undefined
    this._repeat = undefined
    this._repeatSubscription = undefined
    this.color = options.color || DEF_COLOR
    this.speed = options.speed || 45
    this.image = options.image
    this.repeat = new Cesium.Cartesian2(
      options.repeat?.x || 1,
      options.repeat?.y || 1
    )
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

    result.repeat = Cesium.Property.getValueOrClonedDefault(
      this._repeat,
      time,
      DEF_REPEAT,
      result.repeat
    )

    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof PolylineImageTrailMaterialProperty &&
        Cesium.Property.equals(this._color, other._color))
    )
  }
}

Object.defineProperties(PolylineImageTrailMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  speed: Cesium.createPropertyDescriptor('speed'),
  image: Cesium.createPropertyDescriptor('image'),
  repeat: Cesium.createPropertyDescriptor('repeat')
})

export default PolylineImageTrailMaterialProperty
