import { useSelector } from "react-redux";

import { selectTasks } from "app/selectors";

import { AppBar } from "common/components/AppBar/AppBar";
import { TaskForm } from "common/components/TaskForm/TaskForm";
import { TaskList } from "common/components/TaskList/TaskList";

export default function Tasks() {
  const { items, isLoading, error } = useSelector(selectTasks);

  return (
    <>
      {isLoading && !error && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {items.length > 0 && !error && (
        <>
          <AppBar />
          <TaskForm />
          <TaskList />
        </>
      )}
    </>
  );
}
