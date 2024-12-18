import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUser } from '../../../types/User';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: AuthUser) => {
    // const response = await products.getProducts();
    // return response.data;
    return '';
  },
);

export interface IState {
  user: string;
  loading: boolean;
  error: undefined | string;
}

const initialState = {
  user: '',
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
      state.user = action?.payload ? action.payload : '';
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
