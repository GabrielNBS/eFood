import GlobalStyle from './styles'
import Footer from './Components/Footer'

import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'
import Cart from './Components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
