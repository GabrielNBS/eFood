import Header from '../../Components/Header'
import ProductList from '../../Components/RestaurantList'
import Restaurants from '../../models/Restaurant'
import DolceVita from '../../assets/images/La Dolce Vita Trattoria/capa-restaurante.png'

const restaurant: Restaurants[] = [
  {
    avaliacoes: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    image: DolceVita,
    infos: ['Japonesa, Destaque da semana'],
    name: 'La Dolce Vita Trattoria',
  },
  {
    avaliacoes: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    image: DolceVita,
    infos: ['Japonesa, Destaque da semana'],
    name: 'La Dolce Vita Trattoria',
  },
  {
    avaliacoes: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    image: DolceVita,
    infos: ['Japonesa, Destaque da semana'],
    name: 'La Dolce Vita Trattoria',
  },
  {
    avaliacoes: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    image: DolceVita,
    infos: ['Japonesa, Destaque da semana'],
    name: 'La Dolce Vita Trattoria',
  },
]

const Home = () => (
  <>
    <Header />
    <ProductList restaurants={restaurant} />
  </>
)

export default Home
