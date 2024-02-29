import styled from 'styled-components'
import { Props } from '../Checkout/styles'

export const InputGroup = styled.div<Props>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  width: 100%;
  margin-bottom: 8px;

  label {
    font-size: 14px;
  }

  input {
    display: block;
    border: none;
    height: 32px;
    margin-top: 8px;
    width: 100%;
  }
`

export const HalfWidth = styled.div`
  display: flex;

  ${InputGroup} {
    margin-right: 34px;

    input {
      width: 155px;
    }
  }
`
