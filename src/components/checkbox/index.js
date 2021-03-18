import Component from './checkbox/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
