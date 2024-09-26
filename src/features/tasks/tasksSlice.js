import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // addTask: () => {},
    // removeTask: () => {},
    // editTask: () => {},

    // fetchingInProgress: () => {},
    // fetchingInSuccess: () => {},
    // fetchingInReject: () => {},

    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingInSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingInReject(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingInSuccess, fetchingInReject } =
  tasksSlice.actions;
