import { statusFilters } from "features/filters/constants";

export const selectTasks = state => state.tasks;
export const selectFilters = state => state.filters.status;

export const selectTasksCount = state => {
  const { items } = selectTasks(state);
  const tasksCount = items.reduce(
    (acc, item) => {
      item.completed ? (acc.completed += 1) : (acc.active += 1);
      return acc;
    },
    { active: 0, completed: 0 },
  );

  return tasksCount;
};

export const selectVisibleTasks = state => {
  const { items } = selectTasks(state);
  const filter = selectFilters(state);

  switch (filter) {
    case statusFilters.active:
      return items.filter(item => !item.completed);
    case statusFilters.completed:
      return items.filter(item => item.completed);
    default:
      return items;
  }
};
