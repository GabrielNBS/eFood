import styled from 'styled-components'
import { cores } from '../../styles'

export const PlatesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const Card = styled.div`
  background-color: ${cores.vermelho};
`

export const Img = styled.img`
  width: 100%;
  height: 167px;
  display: block;
`
export const NamePlate = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  color: ${cores.branco};
`

export const Description = styled.p`
  line-height: 22px;
  font-size: 14px;
  color: ${cores.branco};
`
