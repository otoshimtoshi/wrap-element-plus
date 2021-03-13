import Component from "./submenu";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
