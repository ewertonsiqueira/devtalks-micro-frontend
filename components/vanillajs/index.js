import singleSpaHtml from 'single-spa-html';

const styles = `
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f5f5f5;
  }

  .title {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
  }

  .cards-container {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
  }

  .card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    width: 300px;
    height: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
  }

  .card-image img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .card-link {
    display: inline-block;
    margin-top: auto;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    padding: 12px 24px;
    background: #2c3e50;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background 0.3s ease;
  }

  .card-link:hover {
    background: #2c3e80;
  }
`;

const template = `
  <style>${styles}</style>
  <div class="container">
    <h1 class="title">O que sobrar vende</h1>
    <div class="cards-container">
      <div class="card">
        <div class="card-image">
          <img src="https://png.pngtree.com/png-clipart/20240903/original/pngtree-bmw-blue-cars-png-image_15921774.png" alt="BMW Azul">
        </div>
        <a href="/estoque" class="card-link">Ver mais..</a>
      </div>
      
      <div class="card">
        <div class="card-image">
          <img src="https://media.istockphoto.com/id/1206806317/pt/vetorial/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cl3NPzmnu0pRmaRGndYIejbHGe-atORf0JDjzmhX8Z8=" alt="Carrinho de Compras">
        </div>
        <a href="/react" class="card-link">Carrinho</a>
      </div>
    </div>
  </div>
`;

const htmlLifecycles = singleSpaHtml({
  template
});

export const { bootstrap, mount, unmount } = htmlLifecycles;