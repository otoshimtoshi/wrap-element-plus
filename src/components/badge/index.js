import Component from './badge'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
