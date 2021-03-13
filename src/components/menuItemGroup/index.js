import Component from "./menuItemGroup";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
