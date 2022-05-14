import React, { useEffect } from 'react';

import AppCard from '../components/Card';
import AppTab from '../components/Tab';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToMy, bookFlight } from '../reducers/launches';
import { useGetBookedQuery } from '../services/flightApi';
import { Launches } from '../services/types';

const MyLaunches = () => {

  const myLaunches = useAppSelector((state) => state.launches.my)
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetBookedQuery('');

  const book = (item: Launches) => dispatch(bookFlight(item));

  useEffect(() => {
    if (data) dispatch(addToMy(data))
  }, [data])

  return <AppTab loading={!!isLoading} onDrop={book} targetType="LAUNCH" title="My Launches">
    {myLaunches.map((el) => {
      return <div key={el.id}>
        <AppCard draggable itemType="MY_LAUNCH" id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}

export default MyLaunches;