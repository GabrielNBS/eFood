import Button from '../Button'
import { ModalContainer, ModalContent, ModalInfos } from './styles'

const Modal = () => {
  return (
    <ModalContainer>
      <ModalContent className="container">
        <img src="https://placehold.co/280x280" alt="Prato do restaurante" />
        <ModalInfos>
          <h2>nome do restaurante</h2>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <span>Serve: de 2 a 3 pessoas</span>
          </p>

          <Button title="Botão para adicionar ao carrinho">
            Adicionar ao carrinho - preço do produto
          </Button>
        </ModalInfos>
      </ModalContent>
      <div className="overlay"></div>
    </ModalContainer>
  )
}

export default Modal
