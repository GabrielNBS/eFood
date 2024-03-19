import * as S from './styles'

type Props = {
  local: string
  name: string
  photo: string
}

const Banner = ({ local, name, photo }: Props) => (
  <S.Img style={{ backgroundImage: `url(${photo})` }}>
    <S.Local>{local}</S.Local>
    <S.TItulo>{name}</S.TItulo>
  </S.Img>
)

export default Banner
