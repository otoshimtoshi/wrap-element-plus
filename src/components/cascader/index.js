import Component from './cascader/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
