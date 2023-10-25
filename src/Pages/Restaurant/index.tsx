import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import ProductList from '../../Components/RestaurantList'
import restaurant from '../../data'

const Restaurant = () => (
  <>
    <Header restaurantStyle />
    <Banner local={restaurant[0].infos[1]} name={restaurant[0].name} />
  </>
)

export default Restaurant
