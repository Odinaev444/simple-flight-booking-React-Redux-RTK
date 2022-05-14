import { Launches } from '../services/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlertT, SeverityT } from '../components/Alert';

interface State {
  all: Launches[];
  my: Launches[];
  past: Launches[];
  alert: AlertT,
}

type Key = 'all' | 'my' | 'past';

const initialState: State = {
  all: [],
  my: [],
  past: [],
  alert: {
    isOpen: false,
    type: 'success',
    message: ''
  }
};

const launchesSlice = createSlice({
  name: 'launches',
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

const addMany = (state: State, key: Key, payload: any) => {

  payload.map((el: Launches) => {
    const find = state[key].find(e => e.id === el.id);
    if (!find) state[key].push({
      id: el.id,
      name: el.name,
      date_local: el.date_local
    });
  })
};

const addOne = (state: Launches[], payload: Launches, updateCache?: (item: Launches) => void) => {

  const find = state.find(e => e.id === payload.id);
  if (!find) {
    state.push(payload);
  }
};

const moveCard = (state: State, from: Key, to: Key, payload: { id: string }) => {

  state[from] = state[from].filter((el: Launches) => {
    const find = el.id === payload.id;
    if (find) addOne(state[to], el)
    return !find;
  })
};

const showAlert = (state: State, type: SeverityT, message: string) => {

  state.alert = {
    isOpen: true,
    type,
    message
  }
}

export const { addToAll, addToPast, addToMy, bookFlight, cancelFlight, closeAlert } = launchesSlice.actions
export default launchesSlice.reducer;

