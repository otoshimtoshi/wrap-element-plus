import Component from "./dropdownMenu";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
