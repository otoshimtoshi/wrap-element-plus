import Component from "./upload";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
