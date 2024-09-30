import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
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

setupListeners(store.dispatch);
