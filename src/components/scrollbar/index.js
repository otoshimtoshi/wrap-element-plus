import Component from "./scrollbar";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
