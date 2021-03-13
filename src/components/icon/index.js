import Component from "./icon";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
