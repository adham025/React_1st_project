import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import App from './App.jsx'
import CounterContextProvider from './Context/CounterContext.jsx'
import TokenContextProvider from './Context/TokenContext.jsx'
import CartContextProvider from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
    <CartContextProvider>
      <TokenContextProvider>
    <App />
      </TokenContextProvider>
    </CartContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
