/**
 * @Author: Caven
 * @Date: 2020-02-26 23:38:41
 */

const { Cesium } = DC.Namespace

/**
 *  Cesium Material Pack
 */
const czm_cellular = require('../shader/cellular.glsl')
const czm_snoise = require('../shader/snoise.glsl')
const AsphaltMaterial = require('../shader/AsphaltMaterial.glsl')
const BlobMaterial = require('../shader/BlobMaterial.glsl')
const BrickMaterial = require('../shader/BlobMaterial.glsl')
const CementMaterial = require('../shader/CementMaterial.glsl')
const ErosionMaterial = require('../shader/ErosionMaterial.glsl')
const FacetMaterial = require('../shader/FacetMaterial.glsl')
const FresnelMaterial = require('../shader/FresnelMaterial.glsl')
const GrassMaterial = require('../shader/GrassMaterial.glsl')
const ReflectionMaterial = require('../shader/ReflectionMaterial.glsl')
const RefractionMaterial = require('../shader/RefractionMaterial.glsl')
const TieDyeMaterial = require('../shader/TieDyeMaterial.glsl')
const WoodMaterial = require('../shader/WoodMaterial.glsl')
/**
 *  DC Material Pack
 */
const LineEmissionMaterial = require('../shader/PolylineEmissionMaterial.glsl')
const LineFlowMaterial = require('../shader/PolylineFlowMaterial.glsl')
const LineTrailMaterial = require('../shader/PolylineTrailMaterial.glsl')
const LineImageTrailMaterial = require('../shader/PolylineImageTrailMaterial.glsl')
const CircleFadeMaterial = require('../shader/CircleFadeMaterial.glsl')
const CircleWaveMaterial = require('../shader/CircleWaveMaterial.glsl')
const WallTrailMaterial = require('../shader/WallTrailMaterial.glsl')
const CircleScanMaterial = require('../shader/CircleScanMaterial.glsl')
const EllipsoidElectricMaterial = require('../shader/EllipsoidElectricMaterial.glsl')
const WallRippleMaterial = require('../shader/WallRippleMaterial.glsl')

Cesium.ShaderSource._czmBuiltinsAndUniforms.czm_cellular = czm_cellular
Cesium.ShaderSource._czmBuiltinsAndUniforms.czm_snoise = czm_snoise

/**
 * Asphalt
 * @type {string}
 */
Cesium.Material.AsphaltType = 'Asphalt'
Cesium.Material._materialCache.addMaterial(Cesium.Material.AsphaltType, {
  fabric: {
    type: Cesium.Material.AsphaltType,
    uniforms: {
      asphaltColor: new Cesium.Color(0.15, 0.15, 0.15, 1.0),
      bumpSize: 0.02,
      roughness: 0.2
    },
    source: AsphaltMaterial
  },
  translucent: function(material) {
    return material.uniforms.asphaltColor.alpha < 1.0
  }
})

/**
 * Blob
 * @type {string}
 */
Cesium.Material.BlobType = 'Blob'
Cesium.Material._materialCache.addMaterial(Cesium.Material.BlobType, {
  fabric: {
    type: Cesium.Material.BlobType,
    uniforms: {
      lightColor: new Cesium.Color(1.0, 1.0, 1.0, 0.5),
      darkColor: new Cesium.Color(0.0, 0.0, 1.0, 0.5),
      frequency: 10.0
    },
    source: BlobMaterial
  },
  translucent: function(material) {
    var uniforms = material.uniforms
    return uniforms.lightColor.alpha < 1.0 || uniforms.darkColor.alpha < 0.0
  }
})

/**
 * Brick
 * @type {string}
 */
Cesium.Material.BrickType = 'Brick'
Cesium.Material._materialCache.addMaterial(Cesium.Material.BrickType, {
  fabric: {
    type: Cesium.Material.BrickType,
    uniforms: {
      brickColor: new Cesium.Color(0.6, 0.3, 0.1, 1.0),
      mortarColor: new Cesium.Color(0.8, 0.8, 0.7, 1.0),
      brickSize: new Cesium.Cartesian2(0.3, 0.15),
      brickPct: new Cesium.Cartesian2(0.9, 0.85),
      brickRoughness: 0.2,
      mortarRoughness: 0.1
    },
    source: BrickMaterial
  },
  translucent: function(material) {
    var uniforms = material.uniforms
    return uniforms.brickColor.alpha < 1.0 || uniforms.mortarColor.alpha < 1.0
  }
})

/**
 * Cement
 * @type {string}
 */
Cesium.Material.CementType = 'Cement'
Cesium.Material._materialCache.addMaterial(Cesium.Material.CementType, {
  fabric: {
    type: Cesium.Material.CementType,
    uniforms: {
      cementColor: new Cesium.Color(0.95, 0.95, 0.85, 1.0),
      grainScale: 0.01,
      roughness: 0.3
    },
    source: CementMaterial
  },
  translucent: function(material) {
    return material.uniforms.cementColor.alpha < 1.0
  }
})

/**
 * Erosion
 * @type {string}
 */
Cesium.Material.ErosionType = 'Erosion'
Cesium.Material._materialCache.addMaterial(Cesium.Material.ErosionType, {
  fabric: {
    type: Cesium.Material.ErosionType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.5),
      time: 1.0
    },
    source: ErosionMaterial
  },
  translucent: function(material) {
    return material.uniforms.color.alpha < 1.0
  }
})

/**
 * Facet
 * @type {string}
 */
Cesium.Material.FacetType = 'Facet'
Cesium.Material._materialCache.addMaterial(Cesium.Material.FacetType, {
  fabric: {
    type: Cesium.Material.FacetType,
    uniforms: {
      lightColor: new Cesium.Color(0.25, 0.25, 0.25, 0.75),
      darkColor: new Cesium.Color(0.75, 0.75, 0.75, 0.75),
      frequency: 10.0
    },
    source: FacetMaterial
  },
  translucent: function(material) {
    var uniforms = material.uniforms
    return uniforms.lightColor.alpha < 1.0 || uniforms.darkColor.alpha < 0.0
  }
})

/**
 * Fresnel
 * @type {string}
 */
Cesium.Material.FresnelType = 'Fresnel'
Cesium.Material._materialCache.addMaterial(Cesium.Material.FresnelType, {
  fabric: {
    type: Cesium.Material.FresnelType,
    materials: {
      reflection: {
        type: Cesium.Material.ReflectionType
      },
      refraction: {
        type: Cesium.Material.RefractionType
      }
    },
    source: FresnelMaterial
  },
  translucent: false
})

/**
 * Grass
 * @type {string}
 */
Cesium.Material.GrassType = 'Grass'
Cesium.Material._materialCache.addMaterial(Cesium.Material.GrassType, {
  fabric: {
    type: Cesium.Material.GrassType,
    uniforms: {
      grassColor: new Cesium.Color(0.25, 0.4, 0.1, 1.0),
      dirtColor: new Cesium.Color(0.1, 0.1, 0.1, 1.0),
      patchiness: 1.5
    },
    source: GrassMaterial
  },
  translucent: function(material) {
    var uniforms = material.uniforms
    return uniforms.grassColor.alpha < 1.0 || uniforms.dirtColor.alpha < 1.0
  }
})

/**
 * Reflection
 * @type {string}
 */
Cesium.Material.ReflectionType = 'Reflection'
Cesium.Material._materialCache.addMaterial(Cesium.Material.ReflectionType, {
  fabric: {
    type: Cesium.Material.ReflectionType,
    uniforms: {
      cubeMap: Cesium.Material.DefaultCubeMapId,
      channels: 'rgb'
    },
    source: ReflectionMaterial
  },
  translucent: false
})

/**
 * Refraction
 * @type {string}
 */
Cesium.Material.RefractionType = 'Refraction'
Cesium.Material._materialCache.addMaterial(Cesium.Material.RefractionType, {
  fabric: {
    type: Cesium.Material.RefractionType,
    uniforms: {
      cubeMap: Cesium.Material.DefaultCubeMapId,
      channels: 'rgb',
      indexOfRefractionRatio: 0.9
    },
    source: RefractionMaterial
  },
  translucent: false
})

/**
 * TieDye
 * @type {string}
 */
Cesium.Material.TyeDyeType = 'TieDye'
Cesium.Material._materialCache.addMaterial(Cesium.Material.TyeDyeType, {
  fabric: {
    type: Cesium.Material.TyeDyeType,
    uniforms: {
      lightColor: new Cesium.Color(1.0, 1.0, 0.0, 0.75),
      darkColor: new Cesium.Color(1.0, 0.0, 0.0, 0.75),
      frequency: 5.0
    },
    source: TieDyeMaterial
  },
  translucent: function(material) {
    var uniforms = material.uniforms
    return uniforms.lightColor.alpha < 1.0 || uniforms.darkColor.alpha < 0.0
  }
})

/**
 * Wood
 * @type {string}
 */
Cesium.Material.WoodType = 'Wood'
Cesium.Material._materialCache.addMaterial(Cesium.Material.WoodType, {
  fabric: {
    type: Cesium.Material.WoodType,
    uniforms: {
      lightWoodColor: new Cesium.Color(0.6, 0.3, 0.1, 1.0),
      darkWoodColor: new Cesium.Color(0.4, 0.2, 0.07, 1.0),
      ringFrequency: 3.0,
      noiseScale: new Cesium.Cartesian2(0.7, 0.5),
      grainFrequency: 27.0
    },
    source: WoodMaterial
  },
  translucent: function(material) {
    var uniforms = material.uniforms
    return (
      uniforms.lightWoodColor.alpha < 1.0 || uniforms.darkWoodColor.alpha < 1.0
    )
  }
})

/**
 * PolylineEmission
 * @type {string}
 */
Cesium.Material.PolylineEmissionType = 'PolylineEmission'
Cesium.Material._materialCache.addMaterial(
  Cesium.Material.PolylineEmissionType,
  {
    fabric: {
      type: Cesium.Material.PolylineEmissionType,
      uniforms: {
        color: new Cesium.Color(1.0, 0.0, 0.0, 0.7)
      },
      source: LineEmissionMaterial
    },
    translucent: function(material) {
      return true
    }
  }
)

/**
 * PolylineFlow
 * @type {string}
 */
Cesium.Material.PolylineFlowType = 'PolylineFlow'
Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineFlowType, {
  fabric: {
    type: Cesium.Material.PolylineFlowType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      speed: 45
    },
    source: LineFlowMaterial
  },
  translucent: function(material) {
    return true
  }
})

/**
 * PolylineTrail
 * @type {string}
 */
Cesium.Material.PolylineTrailType = 'PolylineTrail'
Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailType, {
  fabric: {
    type: Cesium.Material.PolylineTrailType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      image: Cesium.Material.DefaultImageId,
      speed: 45,
      repeat: new Cesium.Cartesian2(1, 1)
    },
    source: LineTrailMaterial
  },
  translucent: function(material) {
    return true
  }
})

/**
 * PolylineImageTrail
 * @type {string}
 */
Cesium.Material.PolylineImageTrailType = 'PolylineImageTrail'
Cesium.Material._materialCache.addMaterial(
  Cesium.Material.PolylineImageTrailType,
  {
    fabric: {
      type: Cesium.Material.PolylineImageTrailType,
      uniforms: {
        color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
        image: Cesium.Material.DefaultImageId,
        speed: 45,
        repeat: new Cesium.Cartesian2(1, 1)
      },
      source: LineImageTrailMaterial
    },
    translucent: function(material) {
      return true
    }
  }
)

/**
 * CircleFade
 * @type {string}
 */
Cesium.Material.CircleFadeType = 'CircleFade'
Cesium.Material._materialCache.addMaterial(Cesium.Material.CircleFadeType, {
  fabric: {
    type: Cesium.Material.CircleFadeType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      speed: 5
    },
    source: CircleFadeMaterial
  },
  translucent: function(material) {
    return true
  }
})

/**
 * CircleWave
 * @type {string}
 */
Cesium.Material.CircleWaveType = 'CircleWave'
Cesium.Material._materialCache.addMaterial(Cesium.Material.CircleWaveType, {
  fabric: {
    type: Cesium.Material.CircleWaveType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      speed: 5,
      count: 1,
      gradient: 0.1
    },
    source: CircleWaveMaterial
  },
  translucent: function(material) {
    return true
  }
})

/**
 * WallTrail
 * @type {string}
 */
Cesium.Material.WallTrailType = 'WallTrail'
Cesium.Material._materialCache.addMaterial(Cesium.Material.WallTrailType, {
  fabric: {
    type: Cesium.Material.WallTrailType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      image: Cesium.Material.DefaultImageId,
      speed: 5
    },
    source: WallTrailMaterial
  },
  translucent: function(material) {
    return true
  }
})

/**
 * CircleScan
 * @type {string}
 */
Cesium.Material.CircleScanType = 'CircleScan'
Cesium.Material._materialCache.addMaterial(Cesium.Material.CircleScanType, {
  fabric: {
    type: Cesium.Material.CircleScanType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      speed: 5
    },
    source: CircleScanMaterial
  },
  translucent: function(material) {
    return true
  }
})

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
        speed: 5
      },
      source: EllipsoidElectricMaterial
    },
    translucent: function(material) {
      return true
    }
  }
)

/**
 * WallRipple
 * @type {string}
 */
Cesium.Material.WallRippleType = 'WallRipple'
Cesium.Material._materialCache.addMaterial(Cesium.Material.WallRippleType, {
  fabric: {
    type: Cesium.Material.WallRippleType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      speed: 5,
      count: 5
    },
    source: WallRippleMaterial
  },
  translucent: function(material) {
    return true
  }
})
