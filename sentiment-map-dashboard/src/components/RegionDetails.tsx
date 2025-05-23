import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RegionDetails = ({ region, sentiment }: { region: string; sentiment: string }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{region}</Typography>
        <Typography variant="body2">Sentiment: {sentiment}</Typography>
      </CardContent>
    </Card>
  );
};

export default RegionDetails;
