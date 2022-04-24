import React, { useEffect } from 'react';

import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updateMy } from '../reducers/lunches';
import { useGetBookedQuery } from '../services/flightApi';

const MyLunchesP = () => {
  const myLunches = useAppSelector((state) => state.lunches.my)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetBookedQuery('')

  useEffect(() => {
    if (data) dispatch(updateMy(data))
  }, [data])

  if (isLoading) return <>loading...</>;

  return <AppTab title="My Lunches">
    {myLunches.map((el) => {
      return <div key={el.id}>
        <AppCard id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}

export default MyLunchesP;