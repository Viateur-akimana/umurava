import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import adminStatsReducer from "./features/adminStatsSlice";
import challengesReducer from "./features/challengesSlice";
import participantsReducer from "./features/participantsSlice";
import talentStatsReducer from "./features/talentStatsSlice";
import * as Sentry from "@sentry/react";

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  actionTransformer: (action) => {
    if (action.type.includes("SENSITIVE_DATA")) {
      return null;
    }
    return action;
  },
  stateTransformer: (state) => {
    return {
      ...state,
      adminStats: {
        ...state.adminStats,
        secretKey: undefined,
      },
      participants: {
        ...state.participants,
        personalInfo: undefined,
      },
    };
  },
});
export const store = configureStore({
  reducer: {
    adminStats: adminStatsReducer,
    challenges: challengesReducer,
    participants: participantsReducer,
    talentStats: talentStatsReducer,
  },
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(sentryReduxEnhancer),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
