import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from 'next-redux-cookie-wrapper';
import { createWrapper } from 'next-redux-wrapper';
import locationReducer from '../slices/location';
import userReducer from '../slices/user';
import cookieReducer from '../slices/cookie';
import themeReducer from '../slices/theme';

export let store: ReturnType<typeof setupStore>;

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  location: locationReducer,
  user: userReducer,
  cookie: cookieReducer,
  theme: themeReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: [
            {
              subtree: 'location',
              expires: new Date(
                new Date().setDate(new Date().getDate() + 10e5),
              ),
            },
            'user',
            {
              subtree: 'cookie',
              expires: new Date(
                new Date().setDate(new Date().getDate() + 10e5),
              ),
            },
            {
              subtree: 'theme',
              expires: new Date(
                new Date().setDate(new Date().getDate() + 10e5),
              ),
            },
          ],
          expires: new Date(new Date().setDate(new Date().getDate() + 10)),
        }),
      ),
  });

export const makeStore = wrapMakeStore(() => {
  store = setupStore();
  return store;
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
