import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SentimentState {
  sentimentType: 'overall' | 'positive' | 'neutral' | 'negative';
  selectedRegion: string | null;
}

const initialState: SentimentState = {
  sentimentType: 'overall',
  selectedRegion: null,
};


const sentimentSlice = createSlice({
  name: 'sentiment',
  initialState,
  reducers: {
    setSentimentType(state, action: PayloadAction<SentimentState['sentimentType']>) {
      state.sentimentType = action.payload;
    },
    setSelectedRegion(state, action: PayloadAction<string | null>) {
      state.selectedRegion = action.payload;
    },
  },
});

export const { setSentimentType, setSelectedRegion } = sentimentSlice.actions;
export default sentimentSlice.reducer;
