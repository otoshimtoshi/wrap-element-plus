import Component from './buttonGroup'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
