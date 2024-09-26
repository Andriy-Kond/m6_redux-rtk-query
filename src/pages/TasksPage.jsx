import { AppBar } from "common/components/AppBar/AppBar";
import { TaskForm } from "common/components/TaskForm/TaskForm";
import { TaskList } from "common/components/TaskList/TaskList";

export default function TasksPage() {
  return (
    <>
      <h2>Tasks Page</h2>
      <AppBar />
      <TaskForm />
      <TaskList />
    </>
  );
}
