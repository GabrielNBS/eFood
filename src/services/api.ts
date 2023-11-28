import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
    }),
    getType: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
})

const { useGetRestaurantsQuery, useGetTypeQuery } = api

export default api