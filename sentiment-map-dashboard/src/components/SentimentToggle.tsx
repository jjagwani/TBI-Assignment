import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { setSentimentType } from '../store/sentimentSlice';
import { RootState } from '../store';

const SentimentToggle: React.FC = () => {
  const dispatch = useDispatch();
  const sentimentType = useSelector((state: RootState) => state.sentiment.sentimentType);

  const handleChange = (_: any, newType: 'overall' | 'positive' | 'neutral' | 'negative') => {
    if (newType) dispatch(setSentimentType(newType));
  };

  return (
    <ToggleButtonGroup
      value={sentimentType}
      exclusive
      onChange={handleChange}
      aria-label="sentiment type"
    >
      <ToggleButton value="overall">Overall</ToggleButton>
      <ToggleButton value="positive">Positive</ToggleButton>
      <ToggleButton value="neutral">Neutral</ToggleButton>
      <ToggleButton value="negative">Negative</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SentimentToggle;