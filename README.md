# DC-Plugins

<p>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<img src="https://img.shields.io/npm/v/@dvgis/dc-plugins?logo=npm&color=orange" />
<img src="https://img.shields.io/npm/dm/@dvgis/dc-plugins?logo=npm"/>
</p>

[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./README.md)

> DC-SDK plug-in library, the plug-in library includes animation, effects, textures, heatmap, clusterLayer, and Mapv.

## Home

> http://dc.dvgis.cn

## Installation

`CDN`

```html
<!--Plugins Package-->
<script src="libs/dc-sdk/plugins/dc.plugins.min.js"></script>
```

`NPM / YARN`

```shell
yarn add @dvgis/dc-plugins
npm install  @dvgis/dc-plugins
```

```js
import DcPlugins from  'dvgis/dc-plugins/dist/dc.plugins.min' //Plugins Package
```

## Start

```js
DC.use(DcPlugins)
```

## Documentation

[DC Plugins Api](https://resource.dvgis.cn/dc-api/dc-plugins/)

## Demo

| ![picture](http://dc.dvgis.cn/examples/images/layer/cluster_clustering.gif)  | ![picture](http://dc.dvgis.cn/examples/images/overlay/polyline_image_trail.gif) | ![picture](http://dc.dvgis.cn/examples/images/overlay/polyline_flow.gif) | ![picture](http://dc.dvgis.cn/examples/images/overlay/wall_trail.gif) |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| ![picture](http://dc.dvgis.cn/examples/images/scene/start_animation.gif) | ![picture](http://dc.dvgis.cn/examples/images/scene/around_point.gif)  | ![picture](http://dc.dvgis.cn/examples/images/scene/circle_scan.gif?v=1) | ![picture](http://dc.dvgis.cn/examples/images/scene/radar_scan.gif) |
| ![picture](http://dc.dvgis.cn/examples/images/scene/snow.gif) | ![picture](http://dc.dvgis.cn/examples/images/scene/fog.png)  | ![picture](http://dc.dvgis.cn/examples/images/scene/brightness.png?v=2) | ![picture](http://dc.dvgis.cn/examples/images/scene/roaming_tracked.gif) |


[More>>](http://dc.dvgis.cn/#/examples)

## Copyright statement

```warning
1. The framework is a basic platform, completely open source, which can be modified and reconstructed by any individual or institution without our authorization.
2. We are not responsible for any problems arising from the modification of the framework by individuals and organizations.
3. Some industrial plug-ins and tools will be added in the later stage, and the code will be open source appropriately.
4. The package released by us may be used permanently and free of charge by any person or organization subject to:
  1) complete package reference;
  2) reserve this copyright information in the console output
We reserve the right of final interpretation of this copyright information.
```

## Thanks
