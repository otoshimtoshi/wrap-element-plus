import Component from "./rate";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
