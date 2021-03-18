import Component from './cascaderPanel'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
