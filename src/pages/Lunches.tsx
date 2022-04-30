import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetUpcomingQuery } from '../services/flightApi';
import { addToAll, cancelFlight } from '../reducers/lunches';
import { LunchesT } from '../services/types';
import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';

const LunchesP = () => {

  const allLunches = useAppSelector((state) => state.lunches.all);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetUpcomingQuery('');

  const cancel = (item: LunchesT) => confirm('Are you sure ?') === true ? dispatch(cancelFlight(item)) : undefined;

  useEffect(() => {
    if (data) dispatch(addToAll(data))
  }, [data])

  return <AppTab loading={!!isLoading} onDrop={cancel} targetType="MY_LUNCH" title="Lunches">
    {allLunches.map((el) => {
      return <div key={el.id}>
        <AppCard draggable itemType="LUNCH" id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}


export default LunchesP;