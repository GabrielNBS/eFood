import Button from '../Button'
import { OrderContainer } from './styles'

const Order = () => {
  return (
    <OrderContainer>
      <h2>Pedido realizado - ORDER_ID</h2>
      <div>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </div>
      <Button custom="secundary" title="Concluir">
        Concluir
      </Button>
    </OrderContainer>
  )
}

export default Order
