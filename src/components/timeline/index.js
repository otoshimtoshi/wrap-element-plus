import Component from "./timeline";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
