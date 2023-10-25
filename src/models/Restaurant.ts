class Restaurants {
  name: string
  description: string
  image: string
  infos: string[]
  avaliacoes: number
  id: number

  constructor(
    name: string,
    description: string,
    image: string,
    infos: string[],
    avaliacoes: number,
    id: number
  ) {
    this.name = name
    this.description = description
    this.image = image
    this.infos = infos
    this.avaliacoes = avaliacoes
    this.id = id
  }
}

export default Restaurants
