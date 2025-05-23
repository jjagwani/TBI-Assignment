import React from 'react';
import { Box, Typography } from '@mui/material';

const Legend: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="body1">Legend:</Typography>
      <Box width={20} height={20} bgcolor="green" borderRadius={1} />
      <Typography variant="body2">Positive</Typography>
      <Box width={20} height={20} bgcolor="gold" borderRadius={1} />
      <Typography variant="body2">Neutral</Typography>
      <Box width={20} height={20} bgcolor="red" borderRadius={1} />
      <Typography variant="body2">Negative</Typography>
    </Box>
  );
};

export default Legend;