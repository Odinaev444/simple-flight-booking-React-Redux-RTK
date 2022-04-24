import React, { useEffect } from 'react';
import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updatePast } from '../reducers/lunches';
import { useGetPastQuery } from '../services/flightApi';

const PastLunchesP = () => {
  const pastLunches = useAppSelector((state) => state.lunches.past)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetPastQuery('')

  useEffect(() => {
    if (data) dispatch(updatePast(data))
  }, [data])

  if (isLoading) return <>loading...</>;

  return <AppTab title="Past Lunches">
    {pastLunches.map((el) => {
      return <div key={el.id}>
        <AppCard id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}

export default PastLunchesP;