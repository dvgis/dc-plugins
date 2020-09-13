/**
 * @Author: Caven
 * @Date: 2020-01-14 18:22:10
 */

const install = function(DC) {
  if (!DC || !DC.init) {
    throw new Error('Plugins: Missing DC Base')
  }

  if (!DC.ready) {
    throw new Error('Plugins: Missing DC Core')
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
  install
}
