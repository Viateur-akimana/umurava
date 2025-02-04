import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import adminStatsReducer from './features/adminStatsSlice';
import challengesReducer from './features/challengesSlice';
import participantsReducer from './features/participantsSlice';
import talentStatsReducer from './features/talentStatsSlice';

export const store = configureStore({
  reducer: {
    adminStats: adminStatsReducer,
    challenges: challengesReducer,
    participants: participantsReducer,
    talentStats: talentStatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();