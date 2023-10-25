import Restaurants from '../../models/Restaurant'
import Product from '../Restaurant'
import { List, ProductSection } from './styles'

type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <ProductSection className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Product
          avaliacoes={restaurant.avaliacoes}
          description={restaurant.description}
          id={restaurant.id}
          image={restaurant.image}
          infos={restaurant.infos}
          name={restaurant.name}
          key={restaurant.id}
        />
      ))}
    </List>
  </ProductSection>
)

export default RestaurantList
