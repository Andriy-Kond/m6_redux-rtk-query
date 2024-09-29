import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "features/filters/constants";
import { tasksApi, useFetchTasksQuery } from "features/tasks/tasksSlice";

export const selectTasks = state => state[tasksApi.reducerPath];
export const selectFilters = state => state.filters.status;

// НЕ мемоїзований селектор
// export const selectTasksCount = state => {
//   const { items } = selectTasks(state);

//   console.log("Calculating task count"); // ця функція буде спрацьовувати навіть при зміні фільтру. Повідомлення в консолі каже про необхідність мемоїзації.
//   const tasksCount = items.reduce(
//     (acc, item) => {
//       item.completed ? (acc.completed += 1) : (acc.active += 1);
//       return acc;
//     },
//     { active: 0, completed: 0 },
//   );

//   return tasksCount;
// };

// Мемоїзований селектор
export const selectTasksCountMemo = createSelector([selectTasks], tasks => {
  const { items } = tasks;

  // console.log("Calculating task count");

  return items.reduce(
    (acc, item) => {
      item.completed ? (acc.completed += 1) : (acc.active += 1);
      return acc;
    },
    { active: 0, completed: 0 },
  );
});

// НЕ мемоїзований селектор
// export const selectVisibleTasks = state => {
//   const { items } = selectTasks(state);
//   const filter = selectFilters(state);

//   console.log("Calculating visible tasks");

//   switch (filter) {
//     case statusFilters.active:
//       return items.filter(item => !item.completed);
//     case statusFilters.completed:
//       return items.filter(item => item.completed);
//     default:
//       return items;
//   }
// };

// Мемоїзований селектор
export const selectVisibleTasksMemo = createSelector(
  [selectTasks, selectFilters],
  (tasks, filter) => {
    console.log("Calculating visible tasks");

    switch (filter) {
      case statusFilters.active:
        return tasks.filter(item => !item.completed);
      case statusFilters.completed:
        return tasks.filter(item => item.completed);
      default:
        return tasks;
    }
  },
);
