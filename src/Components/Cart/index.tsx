import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/cart'
import Button from '../Button'
import { Overlay, CartContainer, Sidebar, CartItem, Prices } from './styles'
import lixeira from '../../assets/images/lixeira.png'
import { RootReducer } from '../../store'
import { formatPrice } from '../../utils'

const Cart: React.FC = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item: Restaurant | MenuItem | null) =>
            item ? (
              <CartItem key={item.id}>
                {'foto' in item && 'nome' in item && 'preco' in item ? (
                  <>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h2>{item.nome}</h2>
                      <span>{formatPrice(item.preco)}</span>
                    </div>
                    <button type="button">
                      <img src={lixeira} alt="Icone de lixeira" />
                    </button>
                  </>
                ) : null}
              </CartItem>
            ) : null
          )}
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
