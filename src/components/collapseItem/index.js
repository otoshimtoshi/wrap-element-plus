import Component from "./collapseItem";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
