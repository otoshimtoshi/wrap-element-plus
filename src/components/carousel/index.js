import Component from "./carousel";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
