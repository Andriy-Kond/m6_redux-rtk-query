// https://66f3151c71c84d805877c872.mockapi.io/tasks

import axios from "axios";
import {
  fetchingInProgress,
  fetchingInReject,
  fetchingInSuccess,
} from "./tasksSlice";

axios.defaults.baseURL = "https://66f3151c71c84d805877c872.mockapi.io";

// axios.get("/tasks").then(res => {
//   console.log(res.data);
// });

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    const res = await axios.get("/tasks");
    dispatch(fetchingInSuccess(res.data));
  } catch (e) {
    dispatch(fetchingInReject(e.message));
  }
};
