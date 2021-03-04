/**
 * @Author: Caven
 * @Date: 2020-01-14 18:22:10
 */

const install = function(DC) {
  if (!DC || !DC.init) {
    throw new Error('Plugins: Missing DC Base Package')
  }

  if (!DC.ready) {
    throw new Error('Plugins: Missing DC Core Package')
  }

  DC.init(() => {
    require('./Plugins.Loader')
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.DC) {
  install(DC)
}

export default {
  version: __VERSION__,
  compile_time: __TIME__,
  install
}
