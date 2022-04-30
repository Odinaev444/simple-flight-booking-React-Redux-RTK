import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import AppCardDetails from '../components/AppCardDetails';
import { useGetByIdQuery } from '../services/flightApi';
import { LunchesT } from '../services/types';

interface ResponseT {
  data: LunchesT;
  isLoading: boolean;
}

const LunchP = () => {
  let params = useParams();
  const { data, isLoading } = useGetByIdQuery<ResponseT>(`${params.id}`);

  useEffect(() => {
    if (data) console.log(data);
  }, [data])

  if (isLoading) return <>loading...</>;

  return <AppCardDetails {...data} />
}

export default LunchP;