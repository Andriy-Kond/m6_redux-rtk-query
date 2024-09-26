import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchTasks } from "features/tasks/operations";

import Tasks from "features/tasks";

export default function TasksPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <h2>Tasks Page</h2>
      <Tasks />
    </>
  );
}
