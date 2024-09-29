import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "features/filters/filtersSlice";
import { tasksApi } from "features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,

    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});
