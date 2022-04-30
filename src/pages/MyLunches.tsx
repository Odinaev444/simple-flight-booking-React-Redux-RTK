import React, { useEffect } from 'react';

import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToMy, bookFlight } from '../reducers/lunches';
import { useGetBookedQuery } from '../services/flightApi';
import { LunchesT } from '../services/types';

const MyLunchesP = () => {

  const myLunches = useAppSelector((state) => state.lunches.my)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetBookedQuery('');

  const book = (item: LunchesT) => dispatch(bookFlight(item));


  useEffect(() => {
    if (data) dispatch(addToMy(data))
  }, [data])

  if (isLoading) return <>loading...</>;

  return <AppTab onDrop={book} targetType="LUNCH" title="My Lunches">
    {myLunches.map((el) => {
      return <div key={el.id}>
        <AppCard draggable itemType="MY_LUNCH" id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}

export default MyLunchesP;