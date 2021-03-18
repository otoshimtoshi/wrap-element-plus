import Component from './cascader'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
