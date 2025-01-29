import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'
import router from './config/router';


const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#checkout',
    render: r => r(App),
    router
  } 
});

export const { bootstrap, mount, unmount } = vueLifecycles