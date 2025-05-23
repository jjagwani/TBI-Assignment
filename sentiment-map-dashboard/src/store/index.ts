import { configureStore } from '@reduxjs/toolkit';
import sentimentReducer from './sentimentSlice';

export const store = configureStore({
  reducer: {
    sentiment: sentimentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
