import React from 'react';
import { useParams } from "react-router-dom";

const FlightP = () => {
  let params = useParams();
  return <h1>Flight ID : {params.flightID}</h1>;
}

export default FlightP;