import * as S from './styles'
import { ButtonGroup } from '../Checkout/styles'
import Button from '../Button'

type DeliveryInformationProps = {
  title: string
}

const DeliveryInformation: React.FC<DeliveryInformationProps> = ({ title }) => {
  return (
    <form>
      <h2>{title}</h2>
      <S.InputGroup>
        <label htmlFor="fullName">Quem ira receber</label>
        <input type="text" id="fullName" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" />
      </S.InputGroup>
      <S.HalfWidth>
        <S.InputGroup>
          <label htmlFor="cep">CEP</label>
          <input type="number" id="cep" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="deliveryAddress">Numero</label>
          <input type="number" id="deliveryAddress" />
        </S.InputGroup>
      </S.HalfWidth>
      <S.InputGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input type="text" id="complement" />
      </S.InputGroup>
      <ButtonGroup>
        <Button custom="secundary" title="Continuar com o pagamento">
          Continuar com o pagamento
        </Button>
        <Button custom="secundary" title="Voltar para o carrinho">
          Voltar para o carrinho
        </Button>
      </ButtonGroup>
    </form>
  )
}

export default DeliveryInformation
