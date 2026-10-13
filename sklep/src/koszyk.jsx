import './koszyk.css'

function Koszyk() {
  return (
    <div className="cart-page">
      <header className="cart-header">
        <a className="cart-logo" href="/">sklep</a>
      </header>

      <main className="cart-main">
        <nav className="cart-section" aria-label="sekcja">
          <a href="/">Strona główna</a>
          <span>/</span>
          <span>Koszyk</span>
        </nav>

        <div className="cart-title-row">
          <div>
            <h1>Koszyk</h1>
          </div>
        </div>

        <section className="cart-empty" aria-label="Pusty koszyk">
          <div className="cart-icon" aria-hidden="true">0</div>
          <h2>Twój koszyk jest pusty</h2>
          <p>Nie masz jeszcze żadnych produktów.</p>
          <a className="cart-continue" href="/">Wróć do zakupów</a>
        </section>
      </main>

      <footer className="cart-footer">
        Masz pytania? <a href="">Skontaktuj się z nami</a>
      </footer>
    </div>
  )
}

export default Koszyk
