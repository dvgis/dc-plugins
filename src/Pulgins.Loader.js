/*
 * @Author: Caven
 * @Date: 2020-01-14 18:24:57
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-29 16:17:47
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
  SnowEffect
} from './core/effects'

const plugis = {
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

DC.mixin(plugis)
