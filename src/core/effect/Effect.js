/**
 * @Author: Caven
 * @Date: 2020-08-14 23:49:14
 */

import Bloom from './type/Bloom'
import Brightness from './type/Brightness'
import NightVision from './type/NightVision'

class Effect {
  constructor() {
    this._comps = {
      bloom: new Bloom(),
      brightness: new Brightness(),
      night: new NightVision()
    }
  }

  get bloom() {
    return this._comps.bloom
  }

  get brightness() {
    return this._comps.brightness
  }

  get night() {
    return this._comps.night
  }

  /**
   *
   * @param viewer
   */
  install(viewer) {
    Object.keys(this._comps).forEach(key => {
      this._comps[key].addTo(viewer)
    })
    Object.defineProperty(viewer, 'effect', {
      value: this,
      writable: false
    })
  }
}

export default Effect
