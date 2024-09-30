import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filtersSlice } from "features/filters/filtersSlice";
import { tasksApi, tasksSlice } from "features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    // tasks: tasksSlice.reducer,
    filters: filtersSlice.reducer,

    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tasksApi.middleware),
  // або:
  // [...getDefaultMiddleware(), tasksApi.middleware,]
});

setupListeners(store.dispatch);
