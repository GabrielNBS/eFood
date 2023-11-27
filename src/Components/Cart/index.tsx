import Button from '../Button'
import { Overlay, CartContainer, Sidebar, CartItem, Prices } from './styles'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src="https://placehold.co/80x80" alt="" />
            <div>
              <h2>Nome do Restaurante</h2>
              <span>R$ 139,90</span>
            </div>
            <button type="button">
              <img src={lixeira} alt="Icone de lixera" />
            </button>
          </CartItem>
        </ul>
        <Prices>
          <p>Valor total</p>
          <span>R$ 182,70</span>
        </Prices>
        <Button custom="secundary" title="Continuar para a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
