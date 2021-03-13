import Component from "./option";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
