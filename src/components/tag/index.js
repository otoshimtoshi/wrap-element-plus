import Component from "./tag";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
