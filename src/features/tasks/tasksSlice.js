// import { createSlice } from "@reduxjs/toolkit";
// import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./operations";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// * async redux with RTK Query:
export const tasksApi = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66f3151c71c84d805877c872.mockapi.io",
  }),

  endpoints: build => ({
    fetchTasks: build.query({
      query: () => `/tasks`,
      // transformResponse: response => response.data,
      // transformErrorResponse: response => response.status,
      providesTags: ["Tasks"],
      // або так (згідно документації):
      // providesTags: () => [{ type: "Tasks" }],
    }),

    addTask: build.mutation({
      query: task => ({
        url: `/tasks`,
        method: "POST",
        body: { completed: false, text: task },
      }),
      // transformResponse: response => response.data,
      // transformErrorResponse: response => response.status,
      invalidatesTags: ["Tasks"],
    }),

    deleteTask: build.mutation({
      query: id => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      // transformResponse: response => response.data,
      // transformErrorResponse: response => response.status,
      invalidatesTags: ["Tasks"],
    }),

    editTask: build.mutation({
      query: task => ({
        url: `/tasks/${task.id}`,
        method: "PUT",
        body: task,
      }),
      // transformResponse: response => response.data,
      // transformErrorResponse: response => response.status,
      invalidatesTags: ["Tasks"],
    }),

    toggleCompleted: build.mutation({
      query: task => ({
        url: `/tasks/${task.id}`,
        method: "PUT",
        body: { ...task, completed: !task.completed },
      }),
      // transformResponse: response => response.data,
      // transformErrorResponse: response => response.status,
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useFetchTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useEditTaskMutation,
  useToggleCompletedMutation,
} = tasksApi;

// * async redux vanilla & with createAsyncThunk:
// const initialState = {
//   items: [
//     // { id: 0, text: "Learn HTML and CSS", completed: true },
//     // { id: 1, text: "Get good at JavaScript", completed: true },
//     // { id: 2, text: "Master React", completed: false },
//     // { id: 3, text: "Discover Redux", completed: false },
//     // { id: 4, text: "Build amazing apps", completed: false },
//   ],

//   isLoading: false,
//   error: null,
// };
// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// * async redux with createAsyncThunk:
// export const tasksSliceAsyncThunk = createSlice({
//   name: "tasks",
//   initialState,
//   // reducers: {
//   //   addTask: {
//   //     reducer(state, action) {
//   //       state.push(action.payload);
//   //     },

//   //     prepare(text) {
//   //       return {
//   //         payload: {
//   //           id: nanoid(),
//   //           text,
//   //           completed: false,
//   //         },
//   //       };
//   //     },
//   //   },

//   //   deleteTask(state, action) {
//   //     return state.filter(task => task.id !== action.payload);
//   //   },

//   //   toggleCompleted(state, action) {
//   //     for (const task of state) {
//   //       if (task.id === action.payload) {
//   //         task.completed = !task.completed;
//   //       }
//   //     }
//   //   },
//   // },

//   extraReducers: {
//     // The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice
//     [fetchTasks.pending]: handlePending,
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected]: handleRejected,

//     [addTask.pending]: handlePending,
//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addTask.rejected]: handleRejected,

//     [deleteTask.pending]: handlePending,
//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;

//       const index = state.items.findIndex(
//         task => task.id === action.payload.id, // тре дивити що саме приходить з сервера (що у res.data в operations-deleteTask)
//       );
//       state.items.splice(index, 1);
//       // або:
//       // state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//     [deleteTask.rejected]: handleRejected,

//     [toggleCompleted.pending]: handlePending,
//     [toggleCompleted.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;

//       const idx = state.items.findIndex(item => item.id === action.payload.id);
//       state.items.splice(idx, 1, action.payload);
//     },
//     [toggleCompleted.rejected]: handleRejected,
//   },
// });

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
