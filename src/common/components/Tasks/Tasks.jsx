import { AppBar } from "common/components/AppBar/AppBar";
import { TaskForm } from "common/components/TaskForm/TaskForm";
import { TasksList } from "common/components/TaskList/TasksList";

import {
  useFetchTaskByIdQuery,
  useFetchTasksQuery,
} from "../../../features/tasks/tasksSlice";
import { useState } from "react";

export default function Tasks() {
  const [taskId, setTaskId] = useState("");
  console.log("Tasks >> taskId:::", taskId);
  const { error, isFetching } = useFetchTasksQuery();

  useFetchTaskByIdQuery(taskId, {
    skip: taskId === "",
    // pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setTaskId(form.elements.queryId.value);
    form.reset();
  };

  return (
    <>
      {error && <div>{error}</div>}

      {!error && (
        <>
          <AppBar />
          <TaskForm />
          <TasksList />
        </>
      )}

      <form onSubmit={handleSubmit}>
        <input type="text" name="queryId" />
        <button type="submit"> set id</button>
      </form>

      {isFetching && !error && <div>Loading...</div>}
    </>
  );
}
