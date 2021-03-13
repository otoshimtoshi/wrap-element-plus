import Component from "./timelineItem";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
