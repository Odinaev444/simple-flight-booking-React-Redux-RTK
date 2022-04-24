import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppCard from './AppCard';

const Container = styled('div')({
  overflow: 'scroll',
  width: 290,
  height: 600,
  padding: 10,
  border: '3px solid #bfbfbf',
  borderRadius: 10,
});

const AppTab = ({ children }: { children: any }) => {
  return <Container>
    {children}
  </Container>
}

export default AppTab;