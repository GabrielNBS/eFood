import { useFormik } from 'formik'
import * as Yup from 'yup'
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
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'Endereço inválido')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Local inválido')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O campo precisa ter 6 caracteres')
        .max(9, 'O campo precisa ter 6 caracteres')
        .required('O campo é obrigatório'),
      deliveryAddress: Yup.string()
        .min(1, 'Endereço inválido')
        .required('O campo é obrigatório'),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Número de cartão inválido')
        .required('O campo é obrigatório'),
      cardSecurityNumber: Yup.string()
        .min(3)
        .max(3)
        .required('O campo é obrigatório'),
      monthOfMaturity: Yup.string()
        .min(3)
        .min(3)
        .required('O campo é obrigatório'),
      email: Yup.string().min(3).min(3).required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const getErrorMessage = (fildName: string, message?: string) => {
    const isTouched = fildName in form.touched
    const isInvalid = fildName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

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
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('address', form.errors.address)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('city', form.errors.city)}</small>
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
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cep', form.errors.cep)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="deliveryAddress">Numero</label>
            <input
              type="number"
              id="deliveryAddress"
              name="deliveryAddress"
              value={form.values.deliveryAddress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('deliveryAddress', form.errors.deliveryAddress)}
            </small>
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
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('complement', form.errors.complement)}</small>
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
      <form onSubmit={form.handleSubmit}>
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
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
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
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cardNumber', form.errors.fullName)}</small>
          </S.InputGroup>
          <S.InputGroup maxWidth="87px">
            <label htmlFor="cardSecurityNumber">CVV</label>
            <input
              type="number"
              id="cardSecurityNumber"
              name="cardSecurityNumber"
              value={form.values.cardSecurityNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage(
                'cardSecurityNumber',
                form.errors.cardSecurityNumber
              )}
            </small>
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
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('monthOfMaturity', form.errors.monthOfMaturity)}
            </small>
          </S.InputGroup>
          <S.InputGroup maxWidth="155px">
            <label htmlFor="yearOfMaturity">Ano de vencimento</label>
            <input
              type="number"
              id="yearOfMaturity"
              name="yearOfMaturity"
              value={form.values.yearOfMaturity}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('yearOfMaturity', form.errors.yearOfMaturity)}
            </small>
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
      </form>
      <S.OrderContainer>
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
      </S.OrderContainer>
    </S.CheckoutContainer>
  )
}

export default Checkout
