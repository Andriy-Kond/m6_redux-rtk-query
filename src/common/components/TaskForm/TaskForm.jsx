import { Button } from "common/components/Button/Button";
import css from "./TaskForm.module.css";
import { useAddTaskMutation } from "features/tasks/tasksSlice";

export const TaskForm = () => {
  const [addTask] = useAddTaskMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await addTask({ completed: false, text: form.elements.text.value });
    } catch (error) {
      console.log("handleSubmit >> error:::", error);
    } finally {
      form.reset();
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          name="text"
          placeholder="Enter task text..."
        />
        <Button type="submit">Add task</Button>
      </form>
    </>
  );
};
