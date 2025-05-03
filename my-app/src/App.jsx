import './App.css'
import coins from './assets/coins.png'
import chest from './assets/chest.png'
import battlepass from './assets/battlepass.png'

function App() {
  return (
    <div className="cards-container">

      <div className="card">
        <div className="card-inner">
          <div className="card-header">
            <h2 className="card-category">PACOTE DE</h2>
            <h1 className="card-title">1000 MOEDAS</h1>
            <div className="stars">★ ★ ★</div>
          </div>
          <div className="card-image-container">
            <img src={coins} alt="Moedas de ouro" className="card-image" />
          </div>
          <div className="card-offer">
            <div className="offer-label">OFERTA POR TEMPO LIMITADO</div>
            <div className="discount">ECONOMIZE 20%</div>
            <div className="price-container">
              <div className="price-label">Preço</div>
              <div className="price">R$ 14,90</div>
              <div className="original-price">R$ 19,90</div>
            </div>
            <a href="#" className="buy-button">COMPRAR AGORA</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-header">
            <h2 className="card-category">BUNDLE</h2>
            <h1 className="card-title">LOOT BOX</h1>
            <div className="stars">★ ★ ★</div>
          </div>
          <div className="card-image-container">
            <img src={chest} alt="Baú do Caos" className="card-image" />
          </div>
          <div className="card-offer">
            <div className="offer-label">OFERTA POR TEMPO LIMITADO</div>
            <div className="discount">ECONOMIZE 20%</div>
            <div className="price-container">
              <div className="price-label">Preço</div>
              <div className="price">R$ 9,90</div>
              <div className="original-price">R$ 12,90</div>
            </div>
            <a href="#" className="buy-button">COMPRAR AGORA</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-header">
            <h2 className="card-category">TEMPORADA 5</h2>
            <h1 className="card-title">PASSE DE BATALHA</h1>
            <div className="stars">★ ★ ★</div>
          </div>
          <div className="card-image-container">
            <img src={battlepass} alt="Passe de Batalha" className="card-image" />
          </div>
          <div className="card-offer">
            <div className="offer-label">OFERTA POR TEMPO LIMITADO</div>
            <div className="discount">ECONOMIZE 20%</div>
            <div className="price-container">
              <div className="price-label">Preço</div>
              <div className="price">R$ 19,90</div>
              <div className="original-price">R$ 24,90</div>
            </div>
            <a href="#" className="buy-button">COMPRAR AGORA</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
