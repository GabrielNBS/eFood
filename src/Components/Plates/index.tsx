import Button from '../Button'
import * as S from './style'

const Plates = () => (
  <S.PlatesContainer className="container">
    <S.Card>
      <S.Img src="#" alt="" />
      <S.NamePlate>Pizza</S.NamePlate>
      <S.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint
        asperiores tempora quisquam beatae quasi, eveniet exercitationem
        temporibus esse distinctio rerum, natus repellendus blanditiis. Enim
        quisquam nesciunt omnis laudantium esse.
      </S.Description>
      <Button title="Adicionar ao carrinho" buttonStyle="secundary">
        Adicionar ao carrinho
      </Button>
    </S.Card>
  </S.PlatesContainer>
)

export default Plates
