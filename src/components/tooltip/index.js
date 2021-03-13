import Component from "./tooltip";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
