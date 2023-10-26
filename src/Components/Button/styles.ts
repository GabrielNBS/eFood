import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const ButtonLink = styled.button<Props>`
  color: ${(props) =>
    props.buttonStyle === 'primary'
      ? cores.branco
      : props.buttonStyle === 'secundary'
      ? cores.vermelho
      : cores.branco};
  background-color: ${(props) =>
    props.buttonStyle === 'primary'
      ? cores.vermelho
      : props.buttonStyle === 'secundary'
      ? cores.branco
      : cores.vermelho};
  padding: ${(props) =>
    props.buttonStyle === 'primary'
      ? '4px 6px'
      : props.buttonStyle === 'secundary'
      ? '4px 84px'
      : '4px 6px'};
  border: none;
  cursor: pointer;
  font-weight: 700;
`
