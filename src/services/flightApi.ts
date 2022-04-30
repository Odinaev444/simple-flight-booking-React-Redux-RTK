import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const flightApi = createApi({
  reducerPath: 'flightApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4/launches' }),
  endpoints: (builder) => ({
    getUpcoming: builder.query<RequestInit, string>({
      query: () => ({
        url: `upcoming`,
        method: 'GET',
      }),
    }),
    getPast: builder.query<RequestInit, string>({
      query: () => ({
        url: `past`,
        method: 'GET',
      })
    }),
    getBooked: builder.query<RequestInit, string>({
      query: () => ({
        url: `latest`,
        method: 'GET',
      })
    }),
    getById: builder.query<RequestInit, string>({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'GET',
      })
    }),
  }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints getLunches
export const { useGetUpcomingQuery, useGetPastQuery, useGetBookedQuery, useGetByIdQuery } = flightApi