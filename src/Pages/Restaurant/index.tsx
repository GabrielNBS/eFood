import { useParams } from 'react-router-dom'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import ProductList from '../../Components/RestaurantList'
import restaurant from '../../data'
import Plates from '../../Components/Plates'

const Restaurant = () => {
  const { id } = useParams()
  const selectedRestaurant = restaurant.find((item) => item.id === Number(id))

  if (!selectedRestaurant) {
    return <div>Restaurante não encontrado.</div>
  }

  const { name, infos, image, cardapio } = selectedRestaurant

  const restaurantType = infos.length > 1 ? infos[1] : infos[0]

  return (
    <>
      <Header restaurantStyle />
      <Banner local={restaurantType} name={name} photo={image} />
      <Plates cardapio={cardapio} />
    </>
  )
}

export default Restaurant
