import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./operations";

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

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// * async redux with createAsyncThunk:
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },

  //     prepare(text) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           text,
  //           completed: false,
  //         },
  //       };
  //     },
  //   },

  //   deleteTask(state, action) {
  //     return state.filter(task => task.id !== action.payload);
  //   },

  //   toggleCompleted(state, action) {
  //     for (const task of state) {
  //       if (task.id === action.payload) {
  //         task.completed = !task.completed;
  //       }
  //     }
  //   },
  // },

  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,

    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,

    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        task => task.id === action.payload.id, // тре дивити що саме приходить з сервера (що у res.data в operations-deleteTask)
      );
      state.items.splice(index, 1);
      // або:
      // state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteTask.rejected]: handleRejected,

    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const idx = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(idx, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
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

// export const {
//   fetchingInProgress,
//   fetchingInSuccess,
//   fetchingInReject,
//   // addTask,
//   // deleteTask,
//   // toggleCompleted,
// } = tasksSlice.actions;
