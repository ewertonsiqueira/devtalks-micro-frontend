import singleSpaHtml from 'single-spa-html';

const styles = `
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    padding: 20px;
    height: calc(100vh - 78.72px);
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
    transition: background 0.2s ease;
    text-align: center;
  }

  .card-link:hover {
    background: #2c3e80;
  }
`;

const template = `
  <style>${styles}</style>
  <div class="container">
    <h1 class="title">RotaCar</h1>
    <div class="cards-container">
      <div class="card">
        <div class="card-image">
          <img src="./shared/assets/bmw.png">
        </div>
        <a href="/estoque" class="card-link">Estoque</a>
      </div>
      
      <div class="card">
        <div class="card-image">
          <img src="./shared/assets/logo_shopping.png" style="padding: 30px">
        </div>
        <a href="/carrinho" class="card-link">Carrinho</a>
      </div>
    </div>
  </div>
`;

const htmlLifecycles = singleSpaHtml({
  template
});

export const { bootstrap, mount, unmount } = htmlLifecycles;