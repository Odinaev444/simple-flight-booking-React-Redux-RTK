import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Main from './pages/Main';
import Flight from './pages/Flight';

const App = () => {
  return <Routes>
    <Route path="/" element={<Main />} />
    <Route path=":flightID" element={<Flight />} />
    <Route path="*" element={<h1>Not found</h1>} />
  </Routes>
}

export default App;