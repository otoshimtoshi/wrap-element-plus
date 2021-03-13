import Component from "./datePicker";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
