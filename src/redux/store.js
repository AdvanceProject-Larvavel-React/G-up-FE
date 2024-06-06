import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import storeSlice from './features/auth/storeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    store : storeSlice
  },
});

export default store;