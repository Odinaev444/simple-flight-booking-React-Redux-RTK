import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Lunches from './Lunches';
import MyLunches from './MyLunches';
import PastLunchesP from './PastLunches';

const Container = styled(Grid)({
  maxWidth: 1000,
  margin: "0 auto 0 auto",
});
const TabContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  flexFlow: "wrap"
});

const Title = styled('h5')({
  color: "#86827d",
  fontSize: 23,
  textAlign: 'center'
});

const Main = () => {

  return <Container >
    <Title>Explore the Space</Title>
    <TabContainer>
      <PastLunchesP />
      <Lunches />
      <MyLunches />
    </TabContainer>
  </Container>
}

export default Main;