import Component from "./form";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
