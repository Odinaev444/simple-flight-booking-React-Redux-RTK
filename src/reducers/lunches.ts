import { LunchesT } from '../services/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlertT, SeverityT } from '../components/AppAlert';

interface StateT {
  all: LunchesT[];
  my: LunchesT[];
  past: LunchesT[];
  alert: AlertT,
}

type KeyT = 'all' | 'my' | 'past';

const initialState: StateT = {
  all: [],
  my: [],
  past: [],
  alert: {
    isOpen: false,
    type: 'success',
    message: ''
  }
};

const lunchesSlice = createSlice({
  name: 'lunches',
  initialState,
  reducers: {
    addToAll(state, action: PayloadAction<any>) {
      addMany(state, 'all', action.payload)
    },
    addToPast(state, action: PayloadAction<any>) {
      addMany(state, 'past', action.payload)
    },
    addToMy(state, action: PayloadAction<any>) {
      if (Array.isArray(action.payload)) addMany(state, 'my', action)
      else addOne(state.my, action.payload)
    },
    bookFlight(state, action: PayloadAction<any>) {
      moveCard(state, 'all', 'my', action.payload)
      showAlert(state, 'success', `Flight ${action.payload.id} was added`)
    },
    cancelFlight(state, action: PayloadAction<any>) {
      moveCard(state, 'my', 'all', action.payload)
      showAlert(state, 'info', `Flight ${action.payload.id} has been canceled`)
    },
    closeAlert(state) {
      state.alert = {
        isOpen: false,
        type: 'success',
        message: ''
      }
    }
  },
})


// Selectors 

const addMany = (state: StateT, key: KeyT, payload: any) => {

  payload.map((el: LunchesT) => {
    const find = state[key].find(e => e.id === el.id);
    if (!find) state[key].push({
      id: el.id,
      name: el.name,
      date_local: el.date_local
    });
  })
};

const addOne = (state: LunchesT[], payload: LunchesT, updateCache?: (item: LunchesT) => void) => {

  const find = state.find(e => e.id === payload.id);
  if (!find) {
    state.push(payload);
  }
};

const moveCard = (state: StateT, from: KeyT, to: KeyT, payload: { id: string }) => {

  state[from] = state[from].filter((el: LunchesT) => {
    const find = el.id === payload.id;
    if (find) addOne(state[to], el)
    return !find;
  })
};

const showAlert = (state: StateT, type: SeverityT, message: string) => {

  state.alert = {
    isOpen: true,
    type,
    message
  }
}

export const { addToAll, addToPast, addToMy, bookFlight, cancelFlight, closeAlert } = lunchesSlice.actions
export default lunchesSlice.reducer;

