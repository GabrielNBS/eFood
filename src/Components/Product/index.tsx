import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import { Card, Paragrafo, Titulo, Restaurante, Avaliacoes } from './styles'
import Button from '../Button'

const Product = () => (
  <Card>
    <img src="//placehold.it/472x217" alt="Hioki Sushi" />
    <Tag>Japonesa</Tag>
    <Restaurante>
      <Titulo>Nome Restaurante</Titulo>
      <Avaliacoes>
        <span>4.9</span>
        <img src={estrela} alt="Estrela de avaliacao" />
      </Avaliacoes>
    </Restaurante>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores
      officia. Vero sint id at eum neque culpa a temporibus! Blanditiis magni
      incidunt architecto quia omnis dicta magnam nulla facilis.
    </Paragrafo>
    <Button title="Clique aqui para saber mais">Saiba mais</Button>
  </Card>
)

export default Product
