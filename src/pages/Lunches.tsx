import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetUpcomingQuery } from '../services/flightApi';
import { updateAll } from '../reducers/lunches';

import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';

const LunchesP = () => {
  const allLunches = useAppSelector((state) => state.lunches.all)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetUpcomingQuery('')

  useEffect(() => {
    if (data) dispatch(updateAll(data))
  }, [data])


  if (isLoading) return <>loading...</>;

  return <AppTab title="Lunches">
    {allLunches.map((el) => {
      return <div key={el.id}>
        <AppCard id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}


export default LunchesP;