import Component from './autocomplete'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
