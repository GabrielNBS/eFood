import logo from '../../assets/images/logo.svg'
import { HeaderSection, Logo } from './styles'

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
    </div>
  </HeaderSection>
)

export default Header
