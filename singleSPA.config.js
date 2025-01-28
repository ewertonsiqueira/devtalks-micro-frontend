import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue', 
  () => import('./components/vue/index.js'),
  () => location.pathname === "/vue"
);

registerApplication(
  'react',
  () => import('./components/react/index.js'),
  () => location.pathname === "/react"
);

registerApplication(
  'vanillajs',
  () => import('./components/vanillajs/index.js'),
  () => location.pathname === "/"
);

start();