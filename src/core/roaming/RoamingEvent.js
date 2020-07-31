/**
 * @Author: Caven
 * @Date: 2020-05-11 23:28:13
 */

import RoamingEventType from './RoamingEventType'

const { Event } = DC

const { Cesium } = DC.Namespace

class RoamingEvent extends Event {
  constructor() {
    super()
  }

  _registerEvent() {
    Object.keys(RoamingEventType).forEach(key => {
      let type = RoamingEventType[key]
      this._cache[type] = new Cesium.Event()
    })
  }
}

export default RoamingEvent
