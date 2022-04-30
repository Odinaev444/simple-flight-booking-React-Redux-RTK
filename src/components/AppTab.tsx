import React from 'react';
import { styled } from '@mui/material/styles';
import { useDrop } from 'react-dnd';
import { ItemTypes, ItemKeyT } from '../constants/dnd';
import { LunchesT } from '../services/types';

const Title = styled('h3')({
  textAlign: 'center',
  textTransform: 'uppercase',
  color: "#c1c1c1",
});
const Container = styled('div')({
  overflow: 'overlay',
  width: 290,
  height: 600,
  padding: 10,
  border: '3px solid #bfbfbf',
  borderRadius: 10,
  '&:hover': {
    '&::-webkit-scrollbar': {
      width: 6
    }
  }
});

interface TabT {
  title: string;
  targetType: ItemKeyT;
  children: React.ReactNode;
  onDrop?: (item: LunchesT) => void;
}

const AppTab = ({ title, children, targetType, onDrop }: TabT) => {

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes[targetType],
    drop: (item: LunchesT) => onDrop?.(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  })

  return <div>
    <Title>{title}</Title>
    <Container style={{ background: isOver ? '#e9f5ff' : '' }} ref={drop}>
      {children}
    </Container>
  </div>
}

export default AppTab;