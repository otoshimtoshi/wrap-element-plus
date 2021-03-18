import Component from './slider/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
