import {
  Action,
  AnyAction,
  configureStore,
  Dispatch,
  EnhancedStore,
  Middleware,
  MiddlewareArray,
  ThunkAction,
} from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from 'next-redux-cookie-wrapper';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer, { CounterState } from '../slices/counter';
import locationReducer, { LocationSate } from '../slices/location';

export let store: EnhancedStore<
  {
    counter: CounterState;
    location: LocationSate;
  },
  AnyAction,
  MiddlewareArray<
    [
      Middleware<{}, any, Dispatch<AnyAction>>,
      ThunkMiddlewareFor<{
        counter: CounterState;
        location: LocationSate;
      }>,
    ]
  >
>;

const makeStore = wrapMakeStore(() => {
  store = configureStore({
    reducer: {
      counter: counterReducer,
      location: locationReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: ['location'],
        }),
      ),
  });
  return store;
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
