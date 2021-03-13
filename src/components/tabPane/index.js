import Component from "./tabPane";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
