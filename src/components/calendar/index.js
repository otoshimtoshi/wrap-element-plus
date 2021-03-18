import Component from './calendar'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
