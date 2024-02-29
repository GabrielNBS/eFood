import Button from '../Button'
import * as S from './styles'
import DeliveryInformation from '../DeliveryInformation'

export type CheckoutProps = {
  title: string
}

const Checkout: React.FC<CheckoutProps> = ({ title }) => (
  <S.CheckoutContainer>
    {/* <DeliveryInformation title={title} /> */}
    <form>
      <h2>{title}</h2>
      <S.Row>
        <S.InputGroup>
          <label htmlFor="cardName">Nome do cartão</label>
          <input type="text" id="cardName" />
        </S.InputGroup>
      </S.Row>
      <S.Row>
        <S.InputGroup maxWidth="228px">
          <label htmlFor="cardNumber">Numero do cartão</label>
          <input type="number" id="cardNumber" />
        </S.InputGroup>
        <S.InputGroup maxWidth="87px">
          <label htmlFor="cardSecurityNumber">CVV</label>
          <input type="number" id="cardSecurityNumber" />
        </S.InputGroup>
      </S.Row>
      <S.Row>
        <S.InputGroup maxWidth="155px">
          <label htmlFor="monthOfMaturity">Mes de vencimento</label>
          <input type="number" id="monthOfMaturity" />
        </S.InputGroup>
        <S.InputGroup maxWidth="155px">
          <label htmlFor="yearOfMaturity">Ano de vencimento</label>
          <input type="number" id="yearOfMaturity" />
        </S.InputGroup>
      </S.Row>
      <S.ButtonGroup>
        <Button title="Finalizar Pagamento" custom="secundary">
          Finalizar Pagamento
        </Button>
        <Button title="Voltar para a edição de endereço" custom="secundary">
          Voltar para a edição de endereço
        </Button>
      </S.ButtonGroup>
    </form>
  </S.CheckoutContainer>
)
export default Checkout
