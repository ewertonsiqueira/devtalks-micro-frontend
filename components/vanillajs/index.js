import singleSpaHtml from 'single-spa-html';
const htmlLifecycles = singleSpaHtml({
  template: `
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
      <h1>MicroFrontEnd</h1>
      <div style="display: flex; gap: 20px; margin-top: 20px;">
        <div id="incrementSection" style="text-align: center;">
          <a href="/vue" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">Vue</a>
        </div>
        <div id="decrementSection" style="text-align: center;">
          <a href="/react" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">React</a>
        </div>
      </div>
    </div>
  `,
})

// htmlLifecycles.originalMount = htmlLifecycles.mount;
// htmlLifecycles.mount = function(opts, props) {
//   return htmlLifecycles.originalMount(opts, props)
//     .then(() => {
//       const el = document.querySelector('#counterVal');
//       el.innerText = window.myapp.counter;
//       window.addEventListener('onIncrement', () => {
//         el.innerText = window.myapp.counter;
//       });
//       window.addEventListener('onDecrement', () => {
//         el.innerText = window.myapp.counter;
//       });
//     });
// }.bind(htmlLifecycles);

export const { bootstrap, mount, unmount }= htmlLifecycles