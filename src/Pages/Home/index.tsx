import Header from '../../Components/Header'
import ProductList from '../../Components/RestaurantList'
import restaurant from '../../data'

const Home = () => (
  <>
    <Header />
    <ProductList restaurants={restaurant} />
  </>
)

export default Home
