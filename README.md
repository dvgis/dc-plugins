# DC-Plugins

[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./)

> DC-SDK plug-in library, the plug-in library includes animation, effects, textures, heatmap, clusterLayer, and Mapv.

> [home](http://dc.dvgis.cn)

```warning
Tips：This SDK is JS+GIS framework package. Developers need to have some front-end technology and GIS related technology
```

## Installation

> CDN

```html
<!--Basic Package-->
<script src="libs/dc-sdk/dc.base.min.js"></script>
<!--Core Package-->
<script src="libs/dc-sdk/dc.core.min.js"></script>
<!--Plugins Package-->
<script src="libs/dc-sdk/plugins/dc.plugins.min.js"></script>
<!--Main Style Sheet -->
<link href="libs/dc-sdk/dc.core.min.css" rel="stylesheet" type="text/css" />
```

> NPM / YARN

```shell
   yarn add @dvgis/dc-sdk @dvgis/dc-plugins
   npm install @dvgis/dc-sdk @dvgis/dc-plugins
```

```js
import 'dvgis/dc-sdk/dist/dc.base.min' //Basic Package
import 'dvgis/dc-sdk/dist/dc.core.min' //Core Package
import 'dvgis/dc-plugins/dist/dc.plugins.min' //Plugins Package
import 'dvgis/dc-sdk/dist/dc.core.min.css' // Main Style Sheet
```

## Setting

> Vue

```js
// vue.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgis = './node_modules/@dvgis'

module.exports = {
  // other settings
  chainWebpack: config => {
    config.resolve.alias.set('dvgis', path.resolve(__dirname, dvgisDist))
    config.plugin('copy').use(CopywebpackPlugin, [
      [
        {
          from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
          to: 'libs/dc-sdk/resources'
        }
      ]
    ])
  }
}
```

## Start

```js
DC.ready(() => {
  let viewer = new DC.Viewer(divId) // divId is the Id attribute value of a div node. If it is not passed in, the 3D scene cannot be initialized
})
```

## Documentation

[Cesium Api](https://cesium.com/docs/cesiumjs-ref-doc/)

[DC-SDK Api](http://resource.dvgis.cn/dc-api/api/)

## Demo

| ![picture](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/layer/cluster.png)  | ![picture](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_polyline_d.gif) |    ![picture](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/e_pm2.5.png)    | ![picture](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/e_pm2.5_2.png) |
| :-----------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| ![picture](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_grid_d.gif) | ![picture](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_honeycomb.png)  | ![picture](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_honeycomb_d.gif) | ![picture](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_point_d.gif) |

[More>>](http://dc.dvgis.cn/#/examples)

## Copyright statement

```warning
1. The framework is a basic platform, completely open source, which can be modified and reconstructed by any individual or institution without our authorization.
2. A series of targeted plug-ins and tools will be added later, and an appropriate amount of open source.
3. Free and permanent use by any person or institution subject to the following conditions:
  1) complete package reference;
  2) reserve this copyright information in the console output
We reserve the right of final interpretation of this copyright information.
```

## Thanks
