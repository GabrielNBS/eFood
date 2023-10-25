import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderSection, Logo, Paragrafo } from './styles'
import Banner from '../Banner'

type Props = {
  restaurantStyle?: boolean
}

const Header = ({ restaurantStyle }: Props) => (
  <HeaderSection>
    {restaurantStyle ? (
      <>
        <div className="container restaurant">
          <Link to="/">Restaurantes</Link>
          <Logo>
            <img
              src={logo}
              alt="Logo eFood
        "
            />
          </Logo>
          <span>0 produtos(s) no carrinho</span>
        </div>
        <Banner />
      </>
    ) : (
      <>
        <div className="container home">
          <Logo>
            <img
              src={logo}
              alt="Logo eFood
        "
            />
          </Logo>
        </div>
        <Paragrafo>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Paragrafo>
      </>
    )}
  </HeaderSection>
)

export default Header
