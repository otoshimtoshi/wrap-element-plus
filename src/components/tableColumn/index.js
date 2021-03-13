import Component from "./tableColumn";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
