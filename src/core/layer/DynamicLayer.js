/**
 * @Author: Caven
 * @Date: 2021-01-18 23:20:21
 */

const { State, Layer, OverlayEventType, SceneEventType } = DC

const { Cesium } = DC.Namespace

class DynamicLayer extends Layer {
  constructor(id) {
    super(id)
    this._delegate = new Cesium.CustomDataSource(id)
    this.type = Layer.getLayerType('dynamic')
    this._postUpdateRemoveCallback = undefined
    this._state = State.INITIALIZED
  }

  _onPostUpdate(scene, time) {
    Object(this._cache)
      .keys()
      .forEach(key => {
        let overlay = this._cache[key]
        if (overlay && overlay.overlayEvent) {
          overlay.overlayEvent.fire(OverlayEventType.POSITION_UPDATE, time)
        }
      })
  }

  _addedHook() {
    this._postUpdateRemoveCallback = this._viewer.on(
      SceneEventType.POST_UPDATE,
      this._onPostUpdate,
      this
    )
  }

  _removedHook() {
    this._postUpdateRemoveCallback && this._postUpdateRemoveCallback()
  }
}

Layer.registerType('dynamic')

export default DynamicLayer
