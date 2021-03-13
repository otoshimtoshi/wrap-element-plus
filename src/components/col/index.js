import Component from "./col";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
