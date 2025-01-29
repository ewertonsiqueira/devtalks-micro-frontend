import Vue from 'vue';
import Router from 'vue-router';
import Congratulations from '../pages/Congratulations.vue';
import Checkout from '../pages/Checkout.vue';

Vue.use(Router);

const routes = [
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '/checkout/congratulations',
    component: Congratulations
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;