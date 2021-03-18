import Component from './backtop'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
