import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import GlobalStyle from './styles'
import Footer from './Components/Footer'
import Banner from './Components/Banner'

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
      <Banner />
      <ProductList />
      <Footer />
    </>
  )
}

export default App
