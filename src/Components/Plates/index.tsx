import React, { useState } from 'react'
import * as S from './style'
import Button from '../Button'
import close from '../../assets/images/close 1.png'

type PlatesProps = {
  cardapio: MenuItem[]
}

const Plates: React.FC<PlatesProps> = ({ cardapio }) => {
  const [selectedPlate, setSelectedPlate] = useState<MenuItem | null>(null)

  const handlePlateClick = (plate: MenuItem) => {
    console.log('Plate clicked:', plate)
    setSelectedPlate(plate)
  }

  const closeModal = () => {
    setSelectedPlate(null)
  }

  return (
    <>
      <S.PlatesContainer className="container">
        {cardapio.map((item, index) => (
          <S.Card key={index}>
            <S.Img src={item.foto} alt={`imagem de uma ${item.nome}`} />
            <S.NamePlate>{item.nome}</S.NamePlate>
            <S.Description>{item.descricao}</S.Description>
            <Button
              type="button"
              onClick={() => handlePlateClick(item)}
              title="Adicionar ao carrinho"
              custom="secundary"
            >
              Adicionar ao carrinho
            </Button>
          </S.Card>
        ))}
      </S.PlatesContainer>

      {selectedPlate && (
        <S.ModalContainer className="isVisible">
          <S.ModalContent className="container">
            <Button type="button" onClick={closeModal} title="Fechar Modal">
              <img src={close} alt="Fechar modal" />
            </Button>
            <img src={selectedPlate.foto} alt={selectedPlate.nome} />
            <S.ModalInfos>
              <h2>{selectedPlate.nome}</h2>
              <p>
                {selectedPlate.descricao}
                <span>Serve: de {selectedPlate.porcao}</span>
              </p>
              <Button type="button" title="Adicionar ao carrinho">
                Adicionar ao carrinho - R${selectedPlate.preco}
              </Button>
            </S.ModalInfos>
          </S.ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </S.ModalContainer>
      )}
    </>
  )
}

export default Plates