import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import GlobalStyle from './styles'

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
      <Header />
      <ProductList />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
