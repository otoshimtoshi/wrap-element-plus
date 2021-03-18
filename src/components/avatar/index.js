import Component from './avatar'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
