import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import cookiesService from 'api/services/cookies';
import { RootState } from 'common/store/store';

export interface CookieState {
  accepted: boolean;
}

export const initialState: CookieState = {
  accepted: false,
};

export const cookieConsent = createAsyncThunk('cookie/consent', () =>
  cookiesService.consent(),
);

export const cookieSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(cookieConsent.pending, state => {
        state.accepted = true;
      })
      .addCase(cookieConsent.fulfilled, state => {
        state.accepted = true;
      })
      .addCase(cookieConsent.rejected, state => {
        state.accepted = false;
      })
      .addCase(HYDRATE, (state, { payload }: any) => ({
        ...state,
        ...payload.cookie,
      }));
  },
});

export const selectCookieConsented = (state: RootState) =>
  state.cookie.accepted;

export default cookieSlice.reducer;
