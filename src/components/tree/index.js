import Component from "./tree";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
