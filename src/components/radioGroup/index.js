import Component from "./radioGroup";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
