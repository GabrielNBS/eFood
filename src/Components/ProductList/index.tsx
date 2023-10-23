import Product from '../Product'
import { List, ProductSection } from './styles'

const ProductList = () => (
  <ProductSection className="container">
    <List>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </List>
  </ProductSection>
)

export default ProductList
