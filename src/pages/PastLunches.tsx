import React, { useEffect } from 'react';
import AppCard from '../components/AppCard';
import AppTab from '../components/AppTab';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToPast } from '../reducers/lunches';
import { useGetPastQuery } from '../services/flightApi';

const PastLunchesP = () => {
  const pastLunches = useAppSelector((state) => state.lunches.past)
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetPastQuery('')

  useEffect(() => {
    if (data) dispatch(addToPast(data))
  }, [data])

  return <AppTab loading={!!isLoading} targetType="PAST_LUNCH" title="Past Lunches">
    {pastLunches.map((el) => {
      return <div key={el.id}>
        <AppCard draggable={false} itemType="PAST_LUNCH" id={el.id} name={el.name} date={el.date_local} />
      </div>
    })}
  </AppTab>
}

export default PastLunchesP;