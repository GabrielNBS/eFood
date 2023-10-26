class Restaurants {
  name: string
  description: string
  image: string
  infos: string[]
  avaliacoes: number
  id: number
  cardapio: Plate[]

  constructor(
    name: string,
    description: string,
    image: string,
    infos: string[],
    avaliacoes: number,
    id: number,
    cardapio: Plate[]
  ) {
    this.name = name
    this.description = description
    this.image = image
    this.infos = infos
    this.avaliacoes = avaliacoes
    this.id = id
    this.cardapio = cardapio
  }
}

type Plate = {
  namePlate: string
  descriptionPlate: string
  imagePlate: string
}

export default Restaurants
