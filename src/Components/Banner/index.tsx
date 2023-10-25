import { Img, Local, TItulo } from './styles'
import BannerIMG from '../../assets/images/La Dolce Vita Trattoria/capa-restaurante.png'

const Banner = () => (
  <Img style={{ backgroundImage: `url(${BannerIMG})` }}>
    <Local>italiana</Local>
    <TItulo>La Dolce Vita Trattoria</TItulo>
  </Img>
)

export default Banner
