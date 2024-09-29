import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "features/filters/constants";
import { tasksApi } from "features/tasks/tasksSlice";

export const selectFilters = state => state.filters.status;

// Мемоїзований селектор
export const selectTasksCountMemo = createSelector(
  [tasksApi.endpoints.fetchTasks.select()],
  tasksResult => {
    // console.log("Calculating task count");
    const tasks = tasksResult?.data || []; // без цієї перевірки дає помилку

    return tasks.reduce(
      (acc, task) => {
        task.completed ? (acc.completed += 1) : (acc.active += 1);
        return acc;
      },
      { active: 0, completed: 0 },
    );
  },
);

// Мемоїзований селектор
export const selectVisibleTasksMemo = createSelector(
  [tasksApi.endpoints.fetchTasks.select(), selectFilters],
  (tasksResult, filter) => {
    // console.log("Calculating visible tasks");
    const tasks = tasksResult?.data || []; // без цієї перевірки дає помилку

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
