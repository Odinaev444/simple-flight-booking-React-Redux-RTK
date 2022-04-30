import React, { useState, useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks';
import { closeAlert } from '../reducers/lunches';


export type SeverityT =  'error'|'warning'|'info'|'success';

export interface AlertT{
  isOpen: boolean;
  type: SeverityT;
  message: string;
}

const AppAlert = ( ) => {
  const dispatch = useAppDispatch();
  const {isOpen, type, message } = useAppSelector((state) => state.lunches.alert);
   
  const handleClose = ()=> dispatch(closeAlert())

  return  <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal:'right' }} autoHideDuration={2500} open={isOpen} >
     <Alert onClose={handleClose}  severity={type} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
}


export default AppAlert;