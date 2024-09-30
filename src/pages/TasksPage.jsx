// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// import { fetchTasks } from "features/tasks/operations";

import Tasks from "features/tasks";
// import { useFetchTasksQuery } from "features/tasks/tasksSlice";

export default function TasksPage() {
  // const { data, error, isLoading, isFetching } = useFetchTasksQuery();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchTasks();
  //   // dispatch(fetchTasks());
  // }, [fetchTasks]);

  return (
    <>
      <h2>Tasks Page</h2>
      <Tasks />
    </>
  );
}
