import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks';
import { closeAlert } from '../reducers/launches';


export type SeverityT = 'error' | 'warning' | 'info' | 'success';

export interface AlertT {
  isOpen: boolean;
  type: SeverityT;
  message: string;
}

const AppAlert = () => {
  const dispatch = useAppDispatch();
  const { isOpen, type, message } = useAppSelector((state) => state.launches.alert);

  const handleClose = () => dispatch(closeAlert())

  return <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={2500} open={isOpen} >
    <Alert variant="filled" onClose={handleClose} severity={type} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
}


export default AppAlert;