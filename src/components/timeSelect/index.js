import Component from "./timeSelect";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
