import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import Plates from '../../Components/Plates'

const Restaurant: React.FC = () => {
  const { id } = useParams()
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        const data = await response.json()
        setSelectedRestaurant(data)
      } catch (error) {
        console.error('Erro ao buscar dados do restaurante:', error)
      }
    }

    fetchData()
  }, [id])

  if (!selectedRestaurant) {
    return <div>Carregando...</div>
  }

  const { titulo, tipo, capa, cardapio } = selectedRestaurant

  const plates: MenuItem[] = cardapio || []

  const restaurantType = tipo.length > 1 ? tipo[1] : tipo[0]

  return (
    <>
      <Header restaurantStyle />
      <Banner local={restaurantType} name={titulo} photo={capa} />
      <Plates cardapio={plates} />
    </>
  )
}

export default Restaurant
