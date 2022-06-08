import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../slices/counter';
import locationReducer from '../slices/location';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    location: locationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
