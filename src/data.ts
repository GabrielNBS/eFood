import Restaurants from './models/Restaurant'
import DolceVita from './assets/images/La Dolce Vita Trattoria/capa-restaurante.png'
import HiokiBanner from './assets/images/Hioki Sushi/capa-restaurante.png'

const restaurant: Restaurants[] = [
  {
    avaliacoes: 4.7,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    image: DolceVita,
    infos: ['Destaque da semana', 'Italiana'],
    name: 'La Dolce Vita Trattoria',
  },
  {
    avaliacoes: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 2,
    image: HiokiBanner,
    infos: ['Japonesa'],
    name: 'Hioki Sushi',
  },
]

export default restaurant
