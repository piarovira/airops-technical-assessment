import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "features/workflows/slices/filtersSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
