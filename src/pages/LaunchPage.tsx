import React from 'react';
import { useParams } from "react-router-dom";
import CardDetails from '../components/CardDetails';
import { useGetByIdQuery } from '../services/flightApi';
import { Launches } from '../services/types';

interface Response {
  data: Launches;
  isLoading: boolean;
}

const LaunchPage = () => {
  let params = useParams();
  const { data, isLoading } = useGetByIdQuery<Response>(`${params.id}`);

  if (isLoading) return <>loading...</>;

  return <CardDetails
    id={data.id}
    name={data.name}
    date_local={data.date_local}
    flight_number={data.flight_number}
    rocket={data.rocket}
  />

}

export default LaunchPage;