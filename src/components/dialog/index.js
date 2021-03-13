import Component from "./dialog";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
