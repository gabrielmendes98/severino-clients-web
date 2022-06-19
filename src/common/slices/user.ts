import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { HYDRATE } from 'next-redux-wrapper';
import usersService from 'api/services/user';
import { RootState } from 'common/store/store';

export interface UserState {
  token: string;
  id: string;
  email: string;
  name: string;
  status: FetchStatus;
}

const initialState: UserState = {
  token: '',
  id: '',
  email: '',
  name: '',
  status: 'idle',
};

const decodeToken = (token: string) => {
  const decodedToken = jwtDecode<DecodedToken>(token);
  return decodedToken.user;
};

export const signUp = createAsyncThunk(
  'user/signUp',
  async (userData: SignUpData) => {
    const response = await usersService.create(userData);
    const user = decodeToken(response.token);
    return {
      token: response.token,
      ...user,
    };
  },
);

export const login = createAsyncThunk(
  'user/login',
  async (userData: LoginData) => {
    const response = await usersService.login(userData);
    const user = decodeToken(response.token);
    return {
      token: response.token,
      ...user,
    };
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.status = 'loading';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.status = 'idle';
      })
      .addCase(signUp.rejected, state => {
        state.status = 'failed';
      })
      .addCase(login.pending, state => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.status = 'idle';
      })
      .addCase(login.rejected, state => {
        state.status = 'failed';
      })
      .addCase(HYDRATE, (state, { payload }: any) => ({
        ...state,
        ...payload.user,
      }));
  },
});

export const { signOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export const selectUserLoading = (state: RootState) =>
  state.user.status === 'loading';
export const selectUserIsSigned = (state: RootState) =>
  Boolean(state.user.token);
export const selectUserStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
