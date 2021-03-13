import Component from "./link";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
