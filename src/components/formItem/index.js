import Component from "./formItem";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
