import Component from './input/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
