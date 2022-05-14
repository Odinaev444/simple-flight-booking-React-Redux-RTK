import React, { useEffect } from 'react';
import AppCard from '../components/Card';
import AppTab from '../components/Tab';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToPast } from '../reducers/launches';
import { useGetPastQuery } from '../services/flightApi';

const PastLaunches = () => {
  const pastLaunches = useAppSelector((state) => state.launches.past)
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetPastQuery('')

  useEffect(() => {
    if (data) dispatch(addToPast(data))
  }, [data])

  return <AppTab loading={!!isLoading} targetType="PAST_LAUNCH" title="Past Launches">
    {pastLaunches.map((el) => {
      return <div key={el.id}>
        <AppCard draggable={false} itemType="PAST_LAUNCH" id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}

export default PastLaunches;