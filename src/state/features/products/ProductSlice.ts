import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../../types/Product';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    // const response = await products.getProducts();
    // return response.data;
    return [];
  },
);

export interface IState {
  products: Array<Product>;
  currentProduct: any;
  loading: boolean;
  error: undefined | string;
}

const initialState = {
  products: [],
  loading: false,
  error: undefined,
  currentProduct: null,
} as IState;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCurrentProduct(state, action) {
      state.currentProduct = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action?.payload ? action.payload : [];
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
