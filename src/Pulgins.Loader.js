/*
 * @Author: Caven
 * @Date: 2020-01-14 18:24:57
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-12 12:53:14
 */

import { AroudView, AroundPoint, GlobeRotate } from './core/animation'
import {
  ClusterLayer,
  CzmlLayer,
  HeatLayer,
  KmlLayer,
  MapvLayer,
} from './core/layer'
import {
  PolylineTrailMaterialProperty,
  PolylineFlowMaterialProperty,
  PolylineEmissionMaterialProperty,
  WaterMaterialProperty,
  RimLightingMaterialProperty,
  CircleFadeMaterialProperty,
  CircleWaveMaterialProperty,
} from './core/material'

import {
  Effect,
  BloomEffect,
  CircleScanEffect,
  FogEffect,
  RadarScanEffect,
  RainEffect,
  SnowEffect,
} from './core/effects'

const plugis = {
  AroudView,
  AroundPoint,
  GlobeRotate,
  ClusterLayer,
  CzmlLayer,
  HeatLayer,
  KmlLayer,
  MapvLayer,
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
  WaterMaterialProperty,
  RimLightingMaterialProperty,
  CircleFadeMaterialProperty,
  CircleWaveMaterialProperty,
}

DC.mixin(plugis)
