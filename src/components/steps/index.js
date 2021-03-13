import Component from "./steps";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
