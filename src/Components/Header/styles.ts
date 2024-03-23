import styled from 'styled-components'
import { cores } from '../../styles'
import vector from '../../assets/images/Vector.svg'
import { BreakPoint } from '../../styles'
import { Link } from 'react-router-dom'

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

  .restaurant {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${BreakPoint.tablet}) {
      justify-content: space-around;
    }

    a {
      font-size: 18px;
      font-weight: 900;
      color: ${cores.vermelho};
      cursor: pointer;
    }

    a:nth-child(1) {
      @media (max-width: ${BreakPoint.tablet}) {
        display: none;
      }
    }

    a:nth-child(2) {
      display: none;

      @media (max-width: ${BreakPoint.tablet}) {
        display: block;
      }
    }
  }

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  position: relative;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  cursor: pointer;

  @media (max-width: ${BreakPoint.tablet}) {
    display: block;
  }

  span {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -20px;
    left: 10px;
    border-radius: 50%;
    border: 1px solid ${cores.vermelho};
    text-align: center;
    font-size: 16px;
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
