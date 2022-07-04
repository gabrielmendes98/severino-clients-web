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

const prepareResponseToState = (response: AuthResponse) => ({
  token: response.token,
  ...decodeToken(response.token),
});

export const signUp = createAsyncThunk('user/signUp', (userData: SignUpData) =>
  usersService.create(userData).then(prepareResponseToState),
);

export const login = createAsyncThunk(
  'user/login',
  async (userData: LoginData) =>
    usersService.login(userData).then(prepareResponseToState),
);

export const oAuthLogin = createAsyncThunk(
  'user/oAuthLogin',
  async (userData: OAuthData) =>
    usersService.oAuthLogin(userData).then(prepareResponseToState),
);

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (passwordData: ChangePasswordData) =>
    usersService.changePassword(passwordData),
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
      .addCase(oAuthLogin.pending, state => {
        state.status = 'loading';
      })
      .addCase(oAuthLogin.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.status = 'idle';
      })
      .addCase(oAuthLogin.rejected, state => {
        state.status = 'failed';
      })
      .addCase(changePassword.pending, state => {
        state.status = 'loading';
      })
      .addCase(changePassword.fulfilled, state => {
        state.status = 'idle';
      })
      .addCase(changePassword.rejected, state => {
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
