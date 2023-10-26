import Restaurants from './models/Restaurant'
import DolceVita from './assets/images/La Dolce Vita Trattoria/capa-restaurante.png'
import HiokiBanner from './assets/images/Hioki Sushi/capa-restaurante.png'
import Pizza from './assets/images/La Dolce Vita Trattoria/pizza.png'
import Bolonhesa from './assets/images/La Dolce Vita Trattoria/Bolonhesa.jpeg'
import Ringatonne from './assets/images/La Dolce Vita Trattoria/Rigatone.jpeg'
import Sushi from './assets/images/Hioki Sushi/Sushi.jpeg'
import Lamen from './assets/images/Hioki Sushi/Lamen.jpeg'
import Temaki from './assets/images/Hioki Sushi/Temaki.jpeg'

const restaurant: Restaurants[] = [
  {
    avaliacoes: 4.7,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    image: DolceVita,
    infos: ['Destaque da semana', 'Italiana'],
    name: 'La Dolce Vita Trattoria',
    cardapio: [
      {
        descriptionPlate:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagePlate: Pizza,
        namePlate: 'Margarita Pizza',
      },
      {
        descriptionPlate:
          'Nossa clássica bolonhesa, preparada com carnes nobres, molho de tomate rico e uma pitada de ervas frescas. O equilíbrio perfeito entre sabor e textura.',
        imagePlate: Bolonhesa,
        namePlate: 'Pasta Bolognese',
      },
      {
        descriptionPlate:
          'Ringatonne, uma iguaria italiana que combina massa fresca, molho cremoso e frutos do mar. Cada garfada é uma jornada culinária ao sul da Itália.',
        imagePlate: Ringatonne,
        namePlate: 'Ringatonne',
      },
    ],
  },
  {
    avaliacoes: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 2,
    image: HiokiBanner,
    infos: ['Japonesa'],
    name: 'Hioki Sushi',
    cardapio: [
      {
        descriptionPlate:
          'Temakis feitos sob medida com ingredientes frescos e arroz perfeitamente temperado. Cada mordida é uma explosão de sabor que o transportará para as costas do Japão.',
        imagePlate: Temaki,
        namePlate: 'Temaki',
      },
      {
        descriptionPlate:
          'Uma seleção incrivel de sashimi fresco e sushis artesanais. Cada mordida é uma explosão de sabores que o transportará para o Japão.',
        imagePlate: Sushi,
        namePlate: 'Sushi',
      },
      {
        descriptionPlate:
          'Nosso Lamen é uma mistura perfeita de caldo aromático, macarrão cozido no ponto e ingredientes frescos. Uma tigela quente de conforto que o aquecerá no primeiro gole.',
        imagePlate: Lamen,
        namePlate: 'Lamen',
      },
    ],
  },
]

export default restaurant
