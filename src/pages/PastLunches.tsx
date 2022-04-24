import React, { useEffect } from 'react';
import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updatePastLunches } from '../reducers/lunches';
import { useGetPastQuery } from '../services/flightApi';

const PastLunchesP = () => {
  const pastLunches = useAppSelector((state) => state.lunches.past)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetPastQuery('')

  useEffect(() => {
    if (data) dispatch(updatePastLunches(data))
  }, [data])

  if (isLoading) return <>loading...</>;

  return <AppTab>
    {pastLunches.map((el, index) => {
      return <AppCard key={el.id} id={el.id} name={el.name} date={el.date_local} />
    })}
  </AppTab>
}

export default PastLunchesP;