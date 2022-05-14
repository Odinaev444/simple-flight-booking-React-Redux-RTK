import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { Launches } from '../services/types';

const Card = styled(Paper)({
  height: 'auto',
  marginBottom: 20,
  padding: 20,
  cursor: 'pointer',
  background: "#a2c79e",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CardTitle = styled('h1')({
  fontSize: 45,
  fontWeight: 'bold'
});

const CardParagraph = styled('h3')({
  fontSize: 20,
});

const CardDetails = ({ id, name, date_local, flight_number, rocket }: Launches) => {

  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  return <Card elevation={3}  >
    <CardTitle>{name}</CardTitle>
    <CardParagraph>Date: {date_local}</CardParagraph>
    <CardParagraph>ID: {id}</CardParagraph>
    <CardParagraph>Flight Number:{flight_number}</CardParagraph>
    <CardParagraph>Rocket: {rocket}</CardParagraph>
    <Button variant="contained" onClick={handleClick}>
      Back
    </Button>
  </Card>
}

export default CardDetails;

