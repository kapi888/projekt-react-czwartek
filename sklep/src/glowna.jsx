import { useState } from 'react'
import './glowna.css'

function App() {
  const products = [
    { name: 'Słuchawki', price: '149 zł', image: '' },
    { name: 'Zegarek', price: '199 zł', image: '' },
    { name: 'Kubek', price: '39 zł', image: '' },
  ]

  return (
    <div>
      <header>
        <h1>Mój sklep</h1>
        <input type="search" placeholder="Szukaj produktu..." label="Szukaj produktu" />
        <button type="button">Wyszukaj</button>
        <button type="button">Koszyk</button>
      </header>

      <nav>
        <a href="#promocje">Promocje</a>
        <a href="#kontakt">Kontakt</a>
      </nav>

      <main>
        <section id="promocje">
          <h2>Witaj w naszym sklepie!</h2>
          <p>Znajdź coś dla siebie. Darmowa dostawa od 100 zł.</p>
          <a href="#produkty">Zobacz produkty</a>
        </section>

        <section id="produkty">
          <h2>Popularne produkty</h2>
          {products.map((product) => (
            <article key={product.name}>
              <img
                src={``}
                alt={product.name}
                width="200"
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button type="button">Dodaj do koszyka</button>
            </article>
          ))}
        </section>
      </main>

      <footer>
        <h2>Sklep</h2>
      </footer>
    </div>
  )
}

export default App
