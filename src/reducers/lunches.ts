import { LunchesT } from '../services/types';
import { combineReducers } from 'redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const allLunchesState: LunchesT[] = []
const myLunchesState: LunchesT[] = []
const pastLunchesState: LunchesT[] = []

const allLunchesSlice = createSlice({
  name: 'all',
  initialState: allLunchesState,
  reducers: {
    updateAllLunches(state, action: PayloadAction<any>) {
      action.payload.map((el: LunchesT) => state.push({
        id: el.id,
        name: el.name,
        date_local: el.date_local
      }))
    },
  },
})

const pastLunchesSlice = createSlice({
  name: 'past',
  initialState: pastLunchesState,
  reducers: {
    updatePastLunches(state, action: PayloadAction<any>) {
      action.payload.map((el: LunchesT) => state.push({
        id: el.id,
        name: el.name,
        date_local: el.date_local
      }))
    },
  },
})

const myLunchesSlice = createSlice({
  name: 'my',
  initialState: myLunchesState,
  reducers: {
    updateMyLunches(state, action: PayloadAction<any>) {
      if (Array.isArray(action.payload)) {
        action.payload.map((el: LunchesT) => state.push({
          id: el.id,
          name: el.name,
          date_local: el.date_local
        }))
      } else state.push({
        id: action.payload.id,
        name: action.payload.name,
        date_local: action.payload.date_local
      })

    },
  },
})

export const { updateAllLunches } = allLunchesSlice.actions
export const { updateMyLunches } = myLunchesSlice.actions
export const { updatePastLunches } = pastLunchesSlice.actions

export default combineReducers({
  [allLunchesSlice.name]: allLunchesSlice.reducer,
  [myLunchesSlice.name]: myLunchesSlice.reducer,
  [pastLunchesSlice.name]: pastLunchesSlice.reducer
})

