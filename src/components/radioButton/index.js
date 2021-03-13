import Component from "./radioButton";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
