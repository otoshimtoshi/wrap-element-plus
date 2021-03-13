import Component from "./pagination";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
