import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.svg'

import {
  HeaderSection,
  Logo,
  Paragrafo,
  CartDesktop,
  CartMobile,
} from './styles'
import { RootReducer } from '../../store'
import { FaCartShopping } from 'react-icons/fa6'
import { BsShopWindow } from 'react-icons/bs'

type Props = {
  restaurantStyle?: boolean
}

const Header = ({ restaurantStyle }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderSection>
      {restaurantStyle ? (
        <>
          <div className="container restaurant">
            <Link to="/">Restaurantes</Link>
            <Link to="/">
              <BsShopWindow />
            </Link>
            <Link to="/">
              <Logo>
                <img
                  src={logo}
                  alt="Logo eFood
          "
                />
              </Logo>
            </Link>
            <CartMobile onClick={openCart}>
              <FaCartShopping />
            </CartMobile>
            <CartDesktop onClick={openCart}>
              {items.length} produtos(s) no carrinho
            </CartDesktop>
          </div>
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
}

export default Header
