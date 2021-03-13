import Component from "./checkboxGroup";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
