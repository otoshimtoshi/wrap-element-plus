import Component from "./header";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
