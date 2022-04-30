import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { ItemTypes, ItemKeyT } from '../constants/dnd';

const Card = styled(Paper)(({ opacity }: { opacity: number }) => ({
  height: 150,
  marginBottom: 20,
  padding: "15px 0px 0px 10px",
  cursor: 'pointer',
  background: "#a2c79e",
  opacity: !opacity ? 1 : opacity
}));

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
  itemType: ItemKeyT;
  draggable: boolean;
}
const AppCard = ({ name, date, id, draggable, itemType }: CardT) => {

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes[itemType],
    item: { id, name },
    canDrag: () => draggable,

    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })
  return <Link to={`lunch/${id}`} style={{ textDecoration: 'none' }} >
    <Card ref={drag} opacity={isDragging ? 0.5 : 1} elevation={3}  >
      <CardTitle>{name}</CardTitle>
      <CardParagraph>{date}</CardParagraph>
    </Card>
  </Link>
}

export default AppCard;

