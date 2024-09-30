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

      // providesTags: ["Tasks"],
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Tasks", id })), "Tasks"]
          : ["Tasks"],
    }),

    fetchTaskById: build.query({
      query: id => `/tasks/${id}`,
      providesTags: ["Tasks"],
    }),

    addTask: build.mutation({
      query: task => ({
        url: `/tasks`,
        method: "POST",
        body: task,
      }),

      // invalidatesTags: ["Tasks"],
      invalidatesTags: (result, error, arg) => [{ type: "Tasks", id: arg.id }],
    }),

    deleteTask: build.mutation({
      query: id => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),

      // invalidatesTags: ["Tasks"],
      invalidatesTags: (result, error, arg) => [{ type: "Tasks", id: arg.id }],
    }),

    editTask: build.mutation({
      query: task => ({
        url: `/tasks/${task.id}`,
        method: "PUT",
        body: task,
      }),

      // invalidatesTags: ["Tasks"],
      invalidatesTags: (result, error, arg) => [{ type: "Tasks", id: arg.id }],
    }),

    toggleCompleted: build.mutation({
      query: task => ({
        url: `/tasks/${task.id}`,
        method: "PUT",
        body: { ...task, completed: !task.completed },
      }),

      // invalidatesTags: ["Tasks"],
      invalidatesTags: (result, error, arg) => [{ type: "Tasks", id: arg.id }],
    }),
  }),
});

export const {
  useFetchTasksQuery,
  useFetchTaskByIdQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useEditTaskMutation,
  useToggleCompletedMutation,
} = tasksApi;
