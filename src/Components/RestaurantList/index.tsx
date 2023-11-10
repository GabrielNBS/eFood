import Product from '../Restaurant'
import { List, ProductSection } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <ProductSection className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Product
          avaliacoes={restaurant.avaliacao}
          description={restaurant.descricao}
          id={restaurant.id}
          image={restaurant.capa}
          infos={restaurant.tipo}
          name={restaurant.titulo}
          key={restaurant.id}
        />
      ))}
    </List>
  </ProductSection>
)

export default RestaurantList
