import logo from '../../assets/images/logo.svg'
import { HeaderSection, Logo, Paragrafo } from './styles'

const Header = () => (
  <HeaderSection>
    <div className="container">
      <Logo>
        <img
          src={logo}
          alt="Logo eFood
        "
        />
      </Logo>
      <Paragrafo>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Paragrafo>
    </div>
  </HeaderSection>
)

export default Header
