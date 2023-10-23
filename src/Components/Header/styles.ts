import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderSection = styled.section`
  justify-content: center;
  background: ${cores.amarelo};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const Logo = styled.h1`
  margin: 64px 0 138.5px;
`

export const Paragrafo = styled.p`
  margin-bottom: 40px;
  color: ${cores.vermelho};
  font-size: 36px;
  font-weight: 900;
  text-align: center;
`
