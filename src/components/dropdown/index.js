import Component from "./dropdown";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
