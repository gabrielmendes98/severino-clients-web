import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from 'common/store/store';

export interface ThemeState {
  darkTheme: boolean;
}

export const initialState: ThemeState = {
  darkTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.darkTheme = !state.darkTheme;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      ...payload.theme,
    }),
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkTheme = (state: RootState) => state.theme.darkTheme;

export default themeSlice.reducer;
