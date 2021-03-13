import Component from "./menu";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
