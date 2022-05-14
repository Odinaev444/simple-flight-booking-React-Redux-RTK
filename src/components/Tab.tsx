import React from 'react';
import { styled } from '@mui/material/styles';
import { useDrop } from 'react-dnd';
import { ItemTypes, ItemKey } from '../constants/dnd';
import { Launches } from '../services/types';
import AppCardLoader from './CardLoader';

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

interface Tab {
  title: string;
  targetType: ItemKey;
  children: React.ReactNode;
  loading: boolean;
  onDrop?: (item: Launches) => void;
}

const AppTab = ({ title, children, targetType, loading, onDrop }: Tab) => {

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes[targetType],
    drop: (item: Launches) => onDrop?.(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  })

  return <div>
    <Title>{title}</Title>
    <Container style={{ background: isOver ? '#e9f5ff' : '' }} ref={drop}>
      {loading ? <AppCardLoader /> : children}
    </Container>
  </div>
}

export default AppTab;