import Component from "./table";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
