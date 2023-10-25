import { ReactNode } from 'react'
import logo from '../../assets/images/logo.svg'
import { HeaderSection, Logo } from './styles'

type Props = {
  children?: JSX.Element
}

const Header = ({ children }: Props) => (
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
