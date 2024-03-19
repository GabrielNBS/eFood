import estrela from '../../assets/images/estrela.svg'
import {
  Card,
  Paragrafo,
  Titulo,
  Restaurante,
  Avaliacoes,
  Infos,
} from './styles'
import Button from '../Button'
import { Link } from 'react-router-dom'
import Tag from '../Tag'

type Props = {
  name: string
  description: string
  image: string
  infos: string
  avaliacoes: number
  id: number
  destacado: boolean
}

const Restaurant = ({
  avaliacoes,
  description,
  id,
  image,
  infos,
  name,
  destacado,
}: Props) => (
  <Card key={id}>
    <img src={image} alt="Hioki Sushi" />
    <Infos>
      {destacado ? (
        <>
          <Tag>Destaque da Semana</Tag> <Tag>{infos}</Tag>{' '}
        </>
      ) : (
        <Tag>{infos}</Tag>
      )}
    </Infos>
    <Restaurante>
      <Titulo>{name}</Titulo>
      <Avaliacoes>
        <span>{avaliacoes}</span>
        <img src={estrela} alt="Estrela de avaliacao" />
      </Avaliacoes>
    </Restaurante>
    <Paragrafo>{description}</Paragrafo>
    <Link to={`/restaurant/${id}`}>
      <Button type="button" title="Clique aqui para saber mais">
        Saiba mais
      </Button>
    </Link>
  </Card>
)

export default Restaurant
