import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "features/tasks/filters/filtersSlice";
import { tasksSlice } from "features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    filters: filtersSlice.reducer,
  },
});
