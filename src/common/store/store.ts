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
import locationReducer, { LocationSate } from '../slices/location';
import userReducer, { UserState } from '../slices/user';
import cookieReducer, { CookieState } from '../slices/cookie';
import themeReducer, { ThemeState } from '../slices/theme';

export let store: EnhancedStore<
  {
    location: LocationSate;
    user: UserState;
    cookie: CookieState;
    theme: ThemeState;
  },
  AnyAction,
  MiddlewareArray<
    [
      Middleware<{}, any, Dispatch<AnyAction>>,
      ThunkMiddlewareFor<{
        location: LocationSate;
        user: UserState;
        cookie: CookieState;
        theme: ThemeState;
      }>,
    ]
  >
>;

const makeStore = wrapMakeStore(() => {
  store = configureStore({
    reducer: {
      location: locationReducer,
      user: userReducer,
      cookie: cookieReducer,
      theme: themeReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: ['location', 'user', 'cookie', 'theme'],
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
