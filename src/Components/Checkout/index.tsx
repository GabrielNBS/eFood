import Button from '../Button'
import * as S from './styles'
import DeliveryInformation from '../DeliveryInformation'
import PaymentInformation from '../PaymentInformation'

export type CheckoutProps = {
  title: string
}

const Checkout: React.FC<CheckoutProps> = ({ title }) => (
  <S.CheckoutContainer>
    {/* <DeliveryInformation title={title} /> */}
    <PaymentInformation title={title} />
  </S.CheckoutContainer>
)
export default Checkout
