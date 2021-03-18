import Component from './formItem/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
