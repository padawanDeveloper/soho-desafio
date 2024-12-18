import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './features/products/ProductSlice';
import UserSlice from './features/users/UserSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    user: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
