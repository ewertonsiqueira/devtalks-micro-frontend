import { registerApplication, start } from 'single-spa'

registerApplication(
  'menu_principal',
  () => import('./modules/menu_principal/index.js'),
  () => location.pathname === "/"
);

registerApplication(
  'catalogo', 
  () => import('./modules/estoque/index.js'),
  () => location.pathname === "/estoque"
);

registerApplication(
  'carrinho',
  () => import('./modules/carrinho/index.js'),
  () => location.pathname === "/carrinho"
);

registerApplication(
  'checkout',
  () => import('./modules/checkout/index.js'),
  () => location.pathname.includes("/checkout")
);

start();