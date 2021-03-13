import Component from "./switch";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
