import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTasksCountMemo } from "app/selectors";

export const TaskCounter = () => {
  const tasksCount = useSelector(selectTasksCountMemo);

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed}</p>
    </div>
  );
};
