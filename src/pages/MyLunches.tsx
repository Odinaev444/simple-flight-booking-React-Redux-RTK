import React, { useEffect } from 'react';
import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updateMyLunches } from '../reducers/lunches';
import { useGetBookedQuery } from '../services/flightApi';

const MyLunchesP = () => {
  const myLunches = useAppSelector((state) => state.lunches.my)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetBookedQuery('')

  useEffect(() => {
    if (data) dispatch(updateMyLunches(data))
  }, [data])

  if (isLoading) return <>loading...</>;

  return <AppTab>
    {myLunches.map((el) => {
      return <AppCard key={el.id} id={el.id} name={el.name} date={el.date_local} />
    })}
  </AppTab>
}

export default MyLunchesP;