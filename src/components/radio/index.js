import Component from "./radio";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
