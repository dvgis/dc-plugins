/**
 * @Author: Caven
 * @Date: 2021-02-27 23:22:38
 */

const { Cesium } = DC.Namespace

const RadarSweepMaterial = require('../shader/radar/RadarSweepMaterial.glsl')
const RadarWaveMaterial = require('../shader/radar/RadarWaveMaterial.glsl')

/**
 * RadarSweep
 * @type {string}
 */

Cesium.Material.RadarSweepType = 'RadarSweep'
Cesium.Material._materialCache.addMaterial(Cesium.Material.RadarSweepType, {
  fabric: {
    type: Cesium.Material.RadarSweepType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      speed: 3.0
    },
    source: RadarSweepMaterial
  },
  translucent: function(material) {
    return true
  }
})

/**
 * RadarWave
 * @type {string}
 */
Cesium.Material.RadarWaveType = 'RadarWave'
Cesium.Material._materialCache.addMaterial(Cesium.Material.RadarWaveType, {
  fabric: {
    type: Cesium.Material.RadarWaveType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      speed: 3.0
    },
    source: RadarWaveMaterial
  },
  translucent: function(material) {
    return true
  }
})
