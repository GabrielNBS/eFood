import { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import ProductList from '../../Components/RestaurantList'

const Home = () => {
  const [restaurante, setRestaurante] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])
  return (
    <>
      <Header />
      <ProductList restaurants={restaurante} />
    </>
  )
}

export default Home
