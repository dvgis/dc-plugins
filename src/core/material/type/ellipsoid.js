/**
 * @Author: Caven
 * @Date: 2021-02-27 23:20:11
 */

const { Cesium } = DC.Namespace

const EllipsoidElectricMaterial = require('../shader/ellipsoid/EllipsoidElectricMaterial.glsl')

/**
 * EllipsoidElectric
 * @type {string}
 */
Cesium.Material.EllipsoidElectricType = 'EllipsoidElectric'
Cesium.Material._materialCache.addMaterial(
  Cesium.Material.EllipsoidElectricType,
  {
    fabric: {
      type: Cesium.Material.EllipsoidElectricType,
      uniforms: {
        color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
        speed: 1
      },
      source: EllipsoidElectricMaterial
    },
    translucent: function(material) {
      return true
    }
  }
)
