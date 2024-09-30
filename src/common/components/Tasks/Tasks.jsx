import { AppBar } from "common/components/AppBar/AppBar";
import { TaskForm } from "common/components/TaskForm/TaskForm";
import { TasksList } from "common/components/TaskList/TasksList";

import { useFetchTasksQuery } from "../../../features/tasks/tasksSlice";

export default function Tasks() {
  const { error, isFetching } = useFetchTasksQuery();

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
