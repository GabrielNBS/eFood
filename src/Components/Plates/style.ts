import styled from 'styled-components'
import { cores } from '../../styles'

import { ButtonLink } from '../Button/styles'

export const PlatesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 64px 0 120px;
  gap: 32px;
`

export const Card = styled.div`
  background-color: ${cores.vermelho};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
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
  align-self: flex-start;
  padding: 8px 0;
`

export const Description = styled.p`
  line-height: 22px;
  font-size: 14px;
  color: ${cores.branco};
  padding-bottom: 8px;
`
