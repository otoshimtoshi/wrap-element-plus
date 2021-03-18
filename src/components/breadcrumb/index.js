import Component from './breadcrumb'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
