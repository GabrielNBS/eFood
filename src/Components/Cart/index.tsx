import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import { Overlay, CartContainer, Sidebar, CartItem, Prices } from './styles'
import lixeira from '../../assets/images/lixeira.png'
import { RootReducer } from '../../store'
import { formatPrice } from '../../utils'
import Checkout from '../Checkout'

const Cart: React.FC = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual && 'preco' in valorAtual) {
        return (acumulador += valorAtual.preco)
      }
      return acumulador
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {!payment && items.length > 0 ? (
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
                      <button onClick={() => removeItem(item.id)} type="button">
                        <img src={lixeira} alt="Icone de lixeira" />
                      </button>
                    </>
                  ) : null}
                </CartItem>
              ) : null
            )}
            <Prices>
              <p>Valor total</p>
              <span>{formatPrice(getTotalPrice())}</span>
            </Prices>
            <Button
              onClick={() => setPayment(true)}
              custom="secundary"
              title="Continuar para a entrega"
            >
              Continuar com a entrega
            </Button>
          </ul>
        ) : (
          items.length === 0 && (
            <div>
              <h2>Seu carrinho está vazio</h2>
            </div>
          )
        )}
        {payment && <Checkout setPayment={setPayment} />}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
