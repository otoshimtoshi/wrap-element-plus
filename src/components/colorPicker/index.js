import Component from "./colorPicker";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
