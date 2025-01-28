import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue', 
  () => import('./components/vue/index.js'),
  () => location.pathname === "/"
);

registerApplication(
  'react',
  () => import('./components/react/index.js'),
  () => location.pathname === "/rastreamento"
);

registerApplication(
  'vanillajs',
  () => import('./components/vanillajs/index.js'),
  () => location.pathname === "/vanillajs"
);

start();