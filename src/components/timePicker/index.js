import Component from "./timePicker";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
