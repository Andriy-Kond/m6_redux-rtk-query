import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const initialState = {
  items: [
    // { id: 0, text: "Learn HTML and CSS", completed: true },
    // { id: 1, text: "Get good at JavaScript", completed: true },
    // { id: 2, text: "Master React", completed: false },
    // { id: 3, text: "Discover Redux", completed: false },
    // { id: 4, text: "Build amazing apps", completed: false },
  ],

  isLoading: false,
  error: null,
};

// * async redux with createAsyncThunk:
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },

    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },

    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// * vanilla async redux:
// export const tasksSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     // addTask: () => {},
//     // removeTask: () => {},
//     // editTask: () => {},

//     // fetchingInProgress: () => {},
//     // fetchingInSuccess: () => {},
//     // fetchingInReject: () => {},

//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingInSuccess(state, action) {
//       state.isLoading = false;
//       state.items = action.payload;
//       state.error = null;
//     },
//     fetchingInReject(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
export const {
  fetchingInProgress,
  fetchingInSuccess,
  fetchingInReject,
  addTask,
  deleteTask,
  toggleCompleted,
} = tasksSlice.actions;
