import Component from "./checkboxButton";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
