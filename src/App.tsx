import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import GlobalStyle from './styles'
import Footer from './Components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
      <ProductList />
      <Footer />
    </>
  )
}

export default App
