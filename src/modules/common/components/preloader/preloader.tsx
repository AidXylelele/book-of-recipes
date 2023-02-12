import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const Preloader: React.FC = () => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CircularProgress />
    </Box>
  );
};
