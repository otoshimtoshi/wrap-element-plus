import Component from './aside'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
