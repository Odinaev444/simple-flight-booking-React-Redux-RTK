import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import MainPage from './pages/MainPage';
import LaucnhPage from './pages/LaunchPage';

const App = () => {
  return <DndProvider backend={HTML5Backend}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/launch/:id" element={<LaucnhPage />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  </DndProvider>
}

export default App;