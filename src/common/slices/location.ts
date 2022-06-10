import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../store/store';

export interface LocationSate {
  name: string;
  id: string;
}

const initialState: LocationSate = {
  name: '',
  id: '',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<LocationSate>) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      ...payload.location,
    }),
  },
});

export const { add } = locationSlice.actions;

export const selectLocation = (state: RootState) => state.location;

export default locationSlice.reducer;
