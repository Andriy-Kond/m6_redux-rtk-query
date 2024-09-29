import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66f3151c71c84d805877c872.mockapi.io";

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

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const res = await axios.post("/tasks", { text });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const res = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
