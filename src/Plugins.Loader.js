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
  FogEffect,
  RadarScanEffect,
  RainEffect,
  SnowEffect,
  BrightnessEffect
} from './core/effects'

import { RoamingViewMode, RoamingController, RoamingPath } from './core/roaming'

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
  FogEffect,
  RadarScanEffect,
  RainEffect,
  SnowEffect,
  BrightnessEffect,
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
