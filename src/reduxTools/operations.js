import axios from "axios";

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./tasksSlice";

axios.defaults.baseURL = "https://66f3151c71c84d805877c872.mockapi.io";

export const fetchTasks = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get("/tasks");

    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};
