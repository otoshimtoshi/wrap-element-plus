import Component from "./dropdownItem";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
