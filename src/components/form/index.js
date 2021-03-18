import Component from './form/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
