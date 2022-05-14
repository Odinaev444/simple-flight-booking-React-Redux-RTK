import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetUpcomingQuery } from '../services/flightApi';
import { addToAll, cancelFlight } from '../reducers/launches';
import { Launches } from '../services/types';
import AppCard from '../components/Card';
import AppTab from '../components/Tab';

const LaunchesContent = () => {

  const allLaunches = useAppSelector((state) => state.launches.all);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetUpcomingQuery('');

  const cancel = (item: Launches) => confirm('Are you sure ?') === true ? dispatch(cancelFlight(item)) : undefined;

  useEffect(() => {
    if (data) dispatch(addToAll(data))
  }, [data])

  return <AppTab loading={!!isLoading} onDrop={cancel} targetType="MY_LAUNCH" title="Launches">
    {allLaunches.map((el) => {
      return <div key={el.id}>
        <AppCard draggable itemType="LAUNCH" id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}


export default LaunchesContent;