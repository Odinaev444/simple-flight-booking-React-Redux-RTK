import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import Main from './pages/Main';
import Flight from './pages/Flight';

const App = () => {
  return <DndProvider backend={HTML5Backend}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path=":flightID" element={<Flight />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  </DndProvider>
}

export default App;