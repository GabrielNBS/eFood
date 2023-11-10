import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.5s ease;
  }
`
export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 344px;
  background-color: ${cores.vermelho};
  padding: 32px;
  z-index: 1;

  img {
    display: block;
    width: 280px;
    height: 280px;
    margin-right: 24px;
  }
`

export const ModalInfos = styled.div`
  color: ${cores.brancoPuro};

  h2 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
  }

  p {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 24px;
  }

  span {
    margin-top: 18px;
  }

  button {
    color: ${cores.vermelho};
    background-color: ${cores.branco};
  }
`
