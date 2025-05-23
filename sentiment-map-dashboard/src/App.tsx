import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import WorldMap from './components/WorldMap';
import Legend from './components/Legend';
import SentimentToggle from './components/SentimentToggle';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Container maxWidth="xl">
      <Box display="flex" flexDirection="column" gap={3}>
        <SentimentToggle />
        <Legend />
        <Box height={600}>
          <WorldMap />
        </Box>
      </Box>
    </Container>
  </>
);

export default App;
