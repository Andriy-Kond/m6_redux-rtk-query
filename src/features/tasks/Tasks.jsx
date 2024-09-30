import { AppBar } from "common/components/AppBar/AppBar";
import { TaskForm } from "common/components/TaskForm/TaskForm";
import { TasksList } from "common/components/TaskList/TasksList";

import { useFetchTasksQuery } from "./tasksSlice";

export default function Tasks() {
  const { error, isLoading, isFetching } = useFetchTasksQuery();

  return (
    <>
      {error && <div>{error}</div>}
      {isFetching && !error && <div>Loading...</div>}
      {!isFetching && !error && (
        <>
          <AppBar />
          <TaskForm />
          <TasksList />
        </>
      )}
    </>
  );
}
