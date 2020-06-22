/*
 * @Author: Caven
 * @Date: 2020-03-06 17:56:39
 * @Last Modified by: Caven
 * @Last Modified time: 2020-06-22 21:33:25
 */

const { Cesium } = DC.Namespace

class CircleWaveMaterialProperty {
  constructor(options) {
    options = options || {}
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this._colorSubscription = undefined
    this._speed = undefined
    this._speedSubscription = undefined
    this.color = options.color || Cesium.Color.fromBytes(0, 255, 255, 255)
    this.speed = options.speed || 45
    this.count = Math.max(options.count || 2, 1)
    this.gradient = Cesium.Math.clamp(options.gradient || 0.1, 0, 1)
  }

  get isConstant() {
    return false
  }

  get definitionChanged() {
    return this._definitionChanged
  }

  getType(time) {
    return Cesium.Material.CircleWaveType
  }

  getValue(time, result) {
    if (!result) {
      result = {}
    }
    result.color = Cesium.Property.getValueOrUndefined(this._color, time)
    result.speed = this._speed
    result.count = this.count
    result.gradient = this.gradient
    return result
  }

  equals(other) {
    return (
      this === other ||
      (other instanceof CircleWaveMaterialProperty &&
        Cesium.Property.equals(this._color, other._color))
    )
  }
}

Object.defineProperties(CircleWaveMaterialProperty.prototype, {
  color: Cesium.createPropertyDescriptor('color'),
  speed: Cesium.createPropertyDescriptor('speed')
})

export default CircleWaveMaterialProperty
