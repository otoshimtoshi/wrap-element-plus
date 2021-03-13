import Component from "./collapse";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
