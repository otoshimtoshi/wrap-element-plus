import Component from "./popconfirm";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
