import Component from "./drawer";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
