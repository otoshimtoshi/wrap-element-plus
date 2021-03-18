import Component from './button'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
