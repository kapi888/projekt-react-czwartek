import './glowna.css'

function App() {
  return (
    <div className="shop">
      <header className="header">
        <div className="header-top">
          <a className="logo" href="#main">sklep</a>
          <div className="search">
            <input type="search" placeholder="Czego szukasz?"/>
            <button type="button">Szukaj</button>
          </div>
          <span className="cart">Koszyk</span>
        </div>
        <nav className="menu">
          <a href="#produkty">Elektronika</a>
          <a href="#produkty">Dom i ogród</a>
          <a href="#produkty">Moda</a>
          <a href="#produkty">Sport</a>
          <a href="#produkty">Promocje</a>
        </nav>
      </header>

      <main id="main">
        <section className="banner">
          <div>
            <h1>Znajdź coś dla siebie</h1>
          </div>
          <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=800&q=80" alt="Wybrane produkty do domu" />
        </section>

        <section className="products" id="produkty">
          <h2>Popularne produkty</h2>
          <div className="product-grid">

            <article className="product">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" alt="Słuchawki" />
              <h3>Słuchawki bezprzewodowe</h3>
              <p>249,99 zł</p>
              <button type="button">Dodaj do koszyka</button>
            </article>

            <article className="product">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" alt="Zegarek" />
              <h3>Zegarek</h3>
              <p>189,99 zł</p>
              <button type="button">Dodaj do koszyka</button>
            </article>

            <article className="product">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" alt="Sportowy but" />
              <h3>Buty sportowe</h3>
              <p>219,99 zł</p>
              <button type="button">Dodaj do koszyka</button>
            </article>

          </div>
        </section>
      </main>

      <footer className="footer">sklep</footer>
    </div>
  )
}

export default App
