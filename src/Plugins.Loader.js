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

import ClusterLayer from './core/cluster/ClusterLayer'

import Effect from './core/effect/Effect'

import HeatLayer from './core/heat/HeatLayer'

import {
  CircleBlurMaterialProperty,
  CircleDiffuseMaterialProperty,
  CircleFadeMaterialProperty,
  CirclePulseMaterialProperty,
  CircleScanMaterialProperty,
  CircleSpiralMaterialProperty,
  CircleVaryMaterialProperty,
  CircleWaveMaterialProperty,
  EllipsoidElectricMaterialProperty,
  EllipsoidTrailMaterialProperty,
  PolylineFlickerMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineImageTrailMaterialProperty,
  PolylineLightingMaterialProperty,
  PolylineLightingTrailMaterialProperty,
  PolylineTrailMaterialProperty,
  RadarLineMaterialProperty,
  RadarSweepMaterialProperty,
  RadarWaveMaterialProperty,
  WallImageTrailMaterialProperty,
  WallLineTrailMaterialProperty,
  WallTrailMaterialProperty,
  WaterMaterialProperty
} from './core/material'

import { RoamingViewMode, RoamingController, RoamingPath } from './core/roaming'

import Weather from './core/weather/Weather'

import WindLayer from './core/wind/WindLayer'

const plugins = {
  AroundView,
  AroundPoint,
  CircleScan,
  Flying,
  GlobeRotate,
  RadarScan,
  ClusterLayer,
  Effect,
  HeatLayer,
  CircleBlurMaterialProperty,
  CircleDiffuseMaterialProperty,
  CircleFadeMaterialProperty,
  CirclePulseMaterialProperty,
  CircleScanMaterialProperty,
  CircleSpiralMaterialProperty,
  CircleVaryMaterialProperty,
  CircleWaveMaterialProperty,
  EllipsoidElectricMaterialProperty,
  EllipsoidTrailMaterialProperty,
  PolylineFlickerMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineImageTrailMaterialProperty,
  PolylineLightingMaterialProperty,
  PolylineLightingTrailMaterialProperty,
  PolylineTrailMaterialProperty,
  RadarLineMaterialProperty,
  RadarSweepMaterialProperty,
  RadarWaveMaterialProperty,
  WallImageTrailMaterialProperty,
  WallLineTrailMaterialProperty,
  WallTrailMaterialProperty,
  WaterMaterialProperty,
  WindLayer,
  RoamingViewMode,
  RoamingController,
  Weather,
  RoamingPath
}

DC.mixin(plugins)
