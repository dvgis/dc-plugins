# DC-Plugins

<p>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<img src="https://img.shields.io/npm/v/@dvgis/dc-plugins?logo=npm&color=orange" />
<img src="https://img.shields.io/npm/dm/@dvgis/dc-plugins?logo=npm"/>
</p>

[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./README.md)

> DC-SDK 插件库，插件库包括动画，特效，纹理，热图，clusterLayer，和 Mapv。

## 主页

> http://dc.dvgis.cn

## 安装

`CDN`

```html
<!--插件包-->
<script src="libs/dc-sdk/plugins/dc.plugins.min.js"></script>
```

`NPM / YARN`

```shell
yarn add  @dvgis/dc-plugins
npm install  @dvgis/dc-plugins
```

```js
import DcPlugins from 'dvgis/dc-plugins/dist/dc.plugins.min' //插件包
```

## 开始

```js
DC.use(DcPlugins)
```

## 文档

[DC Plugins Api](https://resource.dvgis.cn/dc-api/dc-plugins/)

## 示例

| ![图片](http://dc.dvgis.cn/examples/images/layer/cluster_clustering.gif)  | ![图片](http://dc.dvgis.cn/examples/images/overlay/polyline_image_trail.gif) | ![图片](http://dc.dvgis.cn/examples/images/overlay/polyline_flow.gif) | ![图片](http://dc.dvgis.cn/examples/images/overlay/wall_trail.gif) |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| ![图片](http://dc.dvgis.cn/examples/images/scene/start_animation.gif) | ![图片](http://dc.dvgis.cn/examples/images/scene/around_point.gif)  | ![图片](http://dc.dvgis.cn/examples/images/scene/circle_scan.gif?v=1) | ![图片](http://dc.dvgis.cn/examples/images/scene/radar_scan.gif) |
| ![图片](http://dc.dvgis.cn/examples/images/scene/snow.gif) | ![图片](http://dc.dvgis.cn/examples/images/scene/fog.png)  | ![图片](http://dc.dvgis.cn/examples/images/scene/brightness.png) | ![图片](http://dc.dvgis.cn/examples/images/scene/roaming_tracked.gif) |


[更多>>](http://dc.dvgis.cn/#/examples)

## 版权声明

```warning
1.框架作为一个基础平台，代码开源，任何个人和机构可以修改、重构，无需经过我方授权。
2.任何个人和机构修改框架出现的问题，我方无需负责。
3.后期会添加一些行业性的插件和工具，代码会适量开源。
4.对于我方发布的程序包，任何个人和机构在遵守下列条件的前提下可以永久免费使用:
   1)程序包完整引用；
   2)保留此版权信息在控制台输出
我方保留对此版权信息的最终解释权。
```

## 感谢
