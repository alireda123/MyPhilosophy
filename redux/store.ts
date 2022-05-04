import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./datastorers/counter";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiforposts } from "./services/apiService";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiforposts.reducerPath]: apiforposts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiforposts.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
