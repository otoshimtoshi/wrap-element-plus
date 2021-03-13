import Component from "./collapseTransition";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
