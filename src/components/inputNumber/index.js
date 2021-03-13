import Component from "./inputNumber";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
