import Component from "./popper";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
