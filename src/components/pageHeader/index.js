import Component from "./pageHeader";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
