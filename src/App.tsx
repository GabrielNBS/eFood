import GlobalStyle from './styles'
import Footer from './Components/Footer'

import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
