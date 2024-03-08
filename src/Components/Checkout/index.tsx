import { useFormik } from 'formik'
import Button from '../Button'
import * as S from './styles'

export type CheckoutProps = {
  title: string
}

const Checkout: React.FC<CheckoutProps> = ({ title }) => {
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      deliveryAddress: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardSecurityNumber: '',
      monthOfMaturity: '',
      yearOfMaturity: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <S.CheckoutContainer>
      <form onSubmit={form.handleSubmit}>
        <h2>{title}</h2>
        <S.InputGroup>
          <label htmlFor="fullName">Quem ira receber</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.values.fullName}
            onChange={form.handleChange}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
          />
        </S.InputGroup>
        <S.HalfWidth>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="deliveryAddress">Numero</label>
            <input
              type="number"
              id="deliveryAddress"
              name="deliveryAddress"
              value={form.values.deliveryAddress}
              onChange={form.handleChange}
            />
          </S.InputGroup>
        </S.HalfWidth>
        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
          />
        </S.InputGroup>
        <S.ButtonGroup>
          <Button
            type="submit"
            custom="secundary"
            title="Continuar com o pagamento"
          >
            Continuar com o pagamento
          </Button>
          <Button custom="secundary" title="Voltar para o carrinho">
            Voltar para o carrinho
          </Button>
        </S.ButtonGroup>
      </form>
      {/* <form onSubmit={form.handleSubmit}>
        <h2>{title}</h2>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardName">Nome do cartão</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup maxWidth="228px">
            <label htmlFor="cardNumber">Numero do cartão</label>
            <input
              type="number"
              id="cardNumber"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
            />
          </S.InputGroup>
          <S.InputGroup maxWidth="87px">
            <label htmlFor="cardSecurityNumber">CVV</label>
            <input
              type="number"
              id="cardSecurityNumber"
              name="cardSecurityNumber"
              value={form.values.cardSecurityNumber}
              onChange={form.handleChange}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup maxWidth="155px">
            <label htmlFor="monthOfMaturity">Mes de vencimento</label>
            <input
              type="number"
              id="monthOfMaturity"
              name="monthOfMaturity"
              value={form.values.monthOfMaturity}
              onChange={form.handleChange}
            />
          </S.InputGroup>
          <S.InputGroup maxWidth="155px">
            <label htmlFor="yearOfMaturity">Ano de vencimento</label>
            <input
              type="number"
              id="yearOfMaturity"
              name="yearOfMaturity"
              value={form.values.yearOfMaturity}
              onChange={form.handleChange}
            />
          </S.InputGroup>
        </S.Row>
        <S.ButtonGroup>
          <Button type="submit" title="Finalizar Pagamento" custom="secundary">
            Finalizar Pagamento
          </Button>
          <Button title="Voltar para a edição de endereço" custom="secundary">
            Voltar para a edição de endereço
          </Button>
        </S.ButtonGroup>
      </form> */}
      {/* <S.OrderContainer>
        <h2>Pedido realizado - ORDER_ID</h2>
        <div>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </div>
        <Button type="submit" custom="secundary" title="Concluir">
          Concluir
        </Button>
      </S.OrderContainer> */}
    </S.CheckoutContainer>
  )
}

export default Checkout
