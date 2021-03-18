import Component from './menu/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
