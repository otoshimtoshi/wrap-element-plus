import Component from "./popover";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
