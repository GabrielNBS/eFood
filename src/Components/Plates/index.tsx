import React from 'react'
import * as S from './style'
import Button from '../Button'
import { Plate } from '../../models/Restaurant'
import Modal from '../Modal'

type PlatesProps = {
  cardapio: Plate[]
}

const Plates: React.FC<PlatesProps> = ({ cardapio }) => (
  <>
    <S.PlatesContainer className="container">
      {cardapio.map((item, index) => (
        <S.Card key={index}>
          <S.Img
            src={item.imagePlate}
            alt={`imagem de uma ${item.namePlate}`}
          />
          <S.NamePlate>{item.namePlate}</S.NamePlate>
          <S.Description>{item.descriptionPlate}</S.Description>
          <Button title="Adicionar ao carrinho" custom="secundary">
            Adicionar ao carrinho
          </Button>
        </S.Card>
      ))}
      <Modal />
    </S.PlatesContainer>
  </>
)

export default Plates
