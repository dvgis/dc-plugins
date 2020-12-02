/**
 * @Author: Caven
 * @Date: 2020-01-14 18:24:57
 */

import {
  AroundView,
  AroundPoint,
  GlobeRotate,
  CircleScan,
  RadarScan
} from './core/animation'
import Effect from './core/effect/Effect'
import Weather from './core/weather/Weather'
import { ClusterLayer, CzmlLayer, HeatLayer, KmlLayer } from './core/layer'
import {
  PolylineTrailMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineEmissionMaterialProperty,
  PolylineImageTrailMaterialProperty,
  WaterMaterialProperty,
  RimLightingMaterialProperty,
  CircleFadeMaterialProperty,
  CircleWaveMaterialProperty,
  WallTrailMaterialProperty
} from './core/material'

import { RoamingViewMode, RoamingController, RoamingPath } from './core/roaming'

const plugins = {
  AroundView,
  AroundPoint,
  GlobeRotate,
  CircleScan,
  RadarScan,
  ClusterLayer,
  CzmlLayer,
  HeatLayer,
  KmlLayer,
  Weather,
  Effect,
  RoamingViewMode,
  RoamingController,
  RoamingPath,
  PolylineTrailMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineEmissionMaterialProperty,
  PolylineImageTrailMaterialProperty,
  WaterMaterialProperty,
  RimLightingMaterialProperty,
  CircleFadeMaterialProperty,
  CircleWaveMaterialProperty,
  WallTrailMaterialProperty
}

DC.mixin(plugins)
