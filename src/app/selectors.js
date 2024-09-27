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
