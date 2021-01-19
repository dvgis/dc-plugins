/**
 * @Author: Caven
 * @Date: 2020-01-14 18:24:57
 */

import {
  AroundView,
  AroundPoint,
  CircleScan,
  Flying,
  GlobeRotate,
  RadarScan
} from './core/animation'

import Effect from './core/effect/Effect'

import Weather from './core/weather/Weather'

import { ClusterLayer, HeatLayer } from './core/layer'

import {
  CircleFadeMaterialProperty,
  CircleScanMaterialProperty,
  CircleWaveMaterialProperty,
  PolylineEmissionMaterialProperty,
  PolylineFlickerMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineImageTrailMaterialProperty,
  PolylineLightingMaterialProperty,
  PolylineTrailMaterialProperty,
  RimLightingMaterialProperty,
  WallTrailMaterialProperty,
  WaterMaterialProperty
} from './core/material'

import { RoamingViewMode, RoamingController, RoamingPath } from './core/roaming'

import WindLayer from './core/wind/WindLayer'

const plugins = {
  AroundView,
  AroundPoint,
  CircleScan,
  Flying,
  GlobeRotate,
  RadarScan,
  ClusterLayer,
  HeatLayer,
  Weather,
  Effect,
  RoamingViewMode,
  RoamingController,
  RoamingPath,
  CircleFadeMaterialProperty,
  CircleScanMaterialProperty,
  CircleWaveMaterialProperty,
  PolylineEmissionMaterialProperty,
  PolylineFlickerMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineImageTrailMaterialProperty,
  PolylineLightingMaterialProperty,
  PolylineTrailMaterialProperty,
  RimLightingMaterialProperty,
  WallTrailMaterialProperty,
  WaterMaterialProperty,
  WindLayer
}

DC.mixin(plugins)
