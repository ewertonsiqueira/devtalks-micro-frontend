import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#estoque',
    render: r => r(App),
  } 
});

export const { bootstrap, mount, unmount } = vueLifecycles