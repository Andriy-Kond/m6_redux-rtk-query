// https://66f3151c71c84d805877c872.mockapi.io/tasks

import axios from "axios";
// import {
//   fetchingInProgress,
//   fetchingInReject,
//   fetchingInSuccess,
// } from "./tasksSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66f3151c71c84d805877c872.mockapi.io";

// * async redux with createAsyncThunk:
export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/tasks");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// * vanilla async redux:
// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());

//     const res = await axios.get("/tasks");
//     dispatch(fetchingInSuccess(res.data));
//   } catch (e) {
//     dispatch(fetchingInReject(e.message));
//   }
// };
