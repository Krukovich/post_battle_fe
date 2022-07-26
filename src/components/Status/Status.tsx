import React from 'react';
import { Alert } from '@mui/material';
import { PLAYER_STATUS } from '../../constants';

interface IComponentProps {
  status: string;
}

const Status: React.FC<IComponentProps> = ({ status }: IComponentProps) => {
  return (
    <Alert severity={status === PLAYER_STATUS.IS_ALIVE ? 'success' : 'error'}>
      {status === PLAYER_STATUS.IS_ALIVE ? 'alive' : 'dead'}
    </Alert>
  );
};

export default Status;
