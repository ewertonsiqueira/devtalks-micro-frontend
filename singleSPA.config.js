import { registerApplication, start } from 'single-spa'

registerApplication(
  'catalogo', 
  () => import('./components/vue/index.js'),
  () => location.pathname === "/estoque"
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