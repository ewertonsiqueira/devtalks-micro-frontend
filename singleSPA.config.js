import { registerApplication, start } from 'single-spa'

registerApplication(
  'catalogo', 
  () => import('./modules/vue/index.js'),
  () => location.pathname === "/estoque"
);

registerApplication(
  'react',
  () => import('./modules/react/index.js'),
  () => location.pathname === "/carrinho"
);

registerApplication(
  'vanillajs',
  () => import('./modules/vanillajs/index.js'),
  () => location.pathname === "/"
);

start();