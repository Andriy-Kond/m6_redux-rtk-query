import { AppBar } from "common/components/AppBar/AppBar";
import { TaskForm } from "common/components/TaskForm/TaskForm";
import { TaskList } from "common/components/TaskList/TaskList";

import { useFetchTasksQuery } from "./tasksSlice";

export default function Tasks() {
  const { error, isLoading } = useFetchTasksQuery();

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && !error && <div>Loading...</div>}
      {!isLoading && !error && (
        <>
          {/* <AppBar /> */}
          <TaskForm />
          <TaskList />
        </>
      )}
    </>
  );
}
