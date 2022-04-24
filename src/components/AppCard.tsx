import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Card = styled(Paper)({
  height: 150,
  marginBottom: 20,
  padding: "15px 0px 0px 10px",
  cursor: 'pointer'
});

const CardTitle = styled('h1')({
  fontSize: 20,
  fontWeight: 'bold'
});

const CardParagraph = styled('h3')({
  fontSize: 10,
});

export interface CardT {
  name: string;
  date: string;
  id: string;
}
const AppCard = ({ name, date, id }: CardT) => {
  return <Link to={`/${id}`} >
    <Card elevation={3}  >
      <CardTitle>{name}</CardTitle>
      <CardParagraph>{date}</CardParagraph>
    </Card>
  </Link>
}

export default AppCard;

