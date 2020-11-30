/**
 * @Author: Caven
 * @Date: 2020-01-14 18:24:57
 */

import { AroundView, AroundPoint, GlobeRotate } from './core/animation'
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

import {
  Effect,
  BloomEffect,
  CircleScanEffect,
  RadarScanEffect,
  BrightnessEffect,
  NightVisionEffect
} from './core/effects'

import { RoamingViewMode, RoamingController, RoamingPath } from './core/roaming'

import Weather from './core/weather/Weather'

const plugins = {
  AroundView,
  AroundPoint,
  GlobeRotate,
  ClusterLayer,
  CzmlLayer,
  HeatLayer,
  KmlLayer,
  Effect,
  BloomEffect,
  CircleScanEffect,
  RadarScanEffect,
  BrightnessEffect,
  NightVisionEffect,
  RoamingViewMode,
  RoamingController,
  RoamingPath,
  Weather,
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
