import React from 'react';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

const CustomSkeleton = styled(Skeleton)({
  height: 150,
  marginBottom: 20,
  padding: "15px 0px 0px 10px",
  cursor: 'pointer',
  borderRadius: 10,
});


const AppCardLoader = () => {
  return <CustomSkeleton variant="circular" />
}

export default AppCardLoader;

