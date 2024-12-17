import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
