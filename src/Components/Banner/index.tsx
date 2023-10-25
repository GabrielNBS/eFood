import { Img, Local, TItulo } from './styles'
import BannerIMG from '../../assets/images/La Dolce Vita Trattoria/capa-restaurante.png'

type Props = {
  local: string
  name: string
}

const Banner = ({ local, name }: Props) => (
  <Img style={{ backgroundImage: `url(${BannerIMG})` }}>
    <Local>{local}</Local>
    <TItulo>{name}</TItulo>
  </Img>
)

export default Banner
