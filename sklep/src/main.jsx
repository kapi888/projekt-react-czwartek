import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Glowna from './glowna.jsx'
import Koszyk from './koszyk.jsx'

const Widok = window.location.pathname === '/koszyk' ? Koszyk : Glowna

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Widok />
  </StrictMode>,
)