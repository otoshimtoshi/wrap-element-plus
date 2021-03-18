import Component from './timelineItem/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
