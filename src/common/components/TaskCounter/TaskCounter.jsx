import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTasks, selectTasksCount } from "app/selectors";

export const TaskCounter = () => {
  // const { items } = useSelector(selectTasks);

  // const tasksCount = items.reduce(
  //   (acc, item) => {
  //     item.completed ? (acc.completed += 1) : (acc.active += 1);
  //     return acc;
  //   },
  //   { active: 0, completed: 0 },
  // );

  const tasksCount = useSelector(selectTasksCount);

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed}</p>
    </div>
  );
};
