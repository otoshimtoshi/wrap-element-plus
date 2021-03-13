import Component from "./carouselItem";

Component.install = function(Vue) {
  Vue.Component(Component.name, Component);
};
export default Component;
