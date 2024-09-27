import { useDispatch } from "react-redux";
import { Button } from "common/components/Button/Button";
import css from "./TaskForm.module.css";
import { useAddTaskMutation } from "features/tasks/tasksSlice";
// import { addTask } from "features/tasks/operations";

export const TaskForm = () => {
  const [addTask, { isLoading, error }] = useAddTaskMutation();
  //  addTask -  це посилання на функцію query, що знаходиться у addTask: build.mutation
  //  task => ({
  //    url: `/tasks`,
  //    method: "POST",
  //    body: { completed: false, text: task },
  //  });

  // const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await addTask(form.elements.text.value);
      // form.elements.text.value доходить у параметр task функції query, що знаходиться у addTask: build.mutation
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
