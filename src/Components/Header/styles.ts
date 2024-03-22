import styled from 'styled-components'
import { cores } from '../../styles'
import vector from '../../assets/images/Vector.svg'
import { BreakPoint } from '../../styles'

export const Logo = styled.h1`
  margin: 64px 0;
`

export const HeaderSection = styled.section`
  justify-content: center;
  background: ${cores.vermelho};
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .restaurant {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 18px;
      font-weight: 900;
      color: ${cores.vermelho};
      cursor: pointer;
    }
  }
`

export const CartDesktop = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  cursor: pointer;

  @media (max-width: ${BreakPoint.tablet}) {
    display: none;
  }
`

export const CartMobile = styled.span`
  display: none;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  cursor: pointer;

  @media (max-width: ${BreakPoint.tablet}) {
    display: block;
  }
`

export const Paragrafo = styled.p`
  margin-bottom: 40px;
  color: ${cores.vermelho};
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-top: 74px;
  padding-bottom: 40px;
`
