import React from 'react';
import { styled } from '@mui/material/styles';

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
});

const AppTab = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return <div>
    <Title>{title}</Title>
    <Container>
      {children}
    </Container>
  </div>
}

export default AppTab;