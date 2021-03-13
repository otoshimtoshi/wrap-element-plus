import Component from "./menuItem";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
