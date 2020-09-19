/**
 * @Author: Caven
 * @Date: 2020-08-14 23:49:14
 */

import EffectEventType from './EffectEventType'
import EffectEvent from './EffectEvent'
import EffectType from './EffectType'

const { Util, State } = DC

class Effect {
  constructor(id) {
    this._id = id || Util.uuid()
    this._viewer = undefined
    this._delegate = undefined
    this._state = undefined
    this._addable = false
    this._effectEvent = new EffectEvent()
    this.type = undefined
    this.on(EffectEventType.ADD, this._onAdd, this)
    this.on(EffectEventType.REMOVE, this._onRemove, this)
  }

  get id() {
    return this._id
  }

  get effectEvent() {
    return this._effectEvent
  }

  /**
   * The hook for mount the viewer
   */
  _mountedHook() {}

  /**
   * The hook for added
   */
  _addedHook() {}

  /**
   * The hook for removed
   */
  _removedHook() {}

  /**
   *
   * @param viewer
   * @private
   */
  _onAdd(viewer) {
    this._viewer = viewer
    this._mountedHook && this._mountedHook()
    if (this._delegate && this._addable) {
      this._viewer.delegate.scene.postProcessStages.add(this._delegate)
      this._addedHook && this._addedHook()
    }
    this._state = State.ADDED
  }

  /**
   * removes
   */
  _onRemove() {
    if (this._viewer && this._delegate && this._addable) {
      this._viewer.scene.postProcessStages.remove(this._delegate)
      this._delegate = undefined
    }
    this._removedHook && this._removedHook()
    this._state = State.REMOVED
  }

  /**
   * Adds to Viewer
   * @param viewer
   * @returns {Effect}
   */
  addTo(viewer) {
    if (viewer && viewer.addEffect) {
      viewer.addEffect(this)
    }
    return this
  }

  /**
   *
   * @param type
   * @param callback
   * @param context
   * @returns {Effect}
   */
  on(type, callback, context) {
    this._effectEvent.on(type, callback, context || this)
    return this
  }

  /**
   *
   * @param {*} type
   * @param {*} callback
   * @param {*} context
   */
  off(type, callback, context) {
    this._effectEvent.off(type, callback, context || this)
    return this
  }

  /**
   *
   * @param type
   * @param params
   * @returns {Effect}
   */
  fire(type, params) {
    this._effectEvent.fire(type, params)
    return this
  }

  /**
   *
   * @param type
   */
  static registerType(type) {
    if (type) {
      EffectType[type.toLocaleUpperCase()] = type.toLocaleLowerCase()
    }
  }

  /**
   *
   * @param type
   * @returns {*|undefined}
   */
  static getEffectType(type) {
    return EffectType[type.toLocaleUpperCase()] || undefined
  }
}

export default Effect
