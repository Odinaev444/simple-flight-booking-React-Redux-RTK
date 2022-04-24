import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetUpcomingQuery } from '../services/flightApi';
import { updateAllLunches } from '../reducers/lunches';

import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';

const LunchesP = () => {
  const allLunches = useAppSelector((state) => state.lunches.all)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetUpcomingQuery('')

  useEffect(() => {
    if (data) dispatch(updateAllLunches(data))
  }, [data])

  if (isLoading) return <>loading...</>;

  return <AppTab>
    {allLunches.map((el) => {
      return <AppCard key={el.id} id={el.id} name={el.name} date={el.date_local} />
    })}
  </AppTab>
}


export default LunchesP;