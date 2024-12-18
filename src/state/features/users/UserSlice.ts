import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUser } from '../../../types/User';
import { auth } from '../../../api';
import { setItem } from '../../../utils/storage';
import { USER_TOKEN } from '../../../constants/common';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: AuthUser) => {
    const resp = await auth.login(credentials);
    const { token } = resp.data;

    await setItem(USER_TOKEN, token);
    return token;
  },
);

export interface IState {
  user?: string;
  loading: boolean;
  error: undefined | string;
}

const initialState = {
  user: undefined,
  loading: false,
  error: undefined,
} as IState;

const productsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action?.payload ? action.payload : undefined;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
