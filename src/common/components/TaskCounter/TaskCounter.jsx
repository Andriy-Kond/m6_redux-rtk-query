// import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import // selectTasksCountMemo,
// selectTasksCount,
// selectTasks,
"app/selectors";
import { useFetchTasksQuery } from "features/tasks/tasksSlice";

export const TaskCounter = () => {
  // const { items } = useSelector(selectTasks);

  const { data: tasks } = useFetchTasksQuery();

  const tasksCount = tasks.reduce(
    (acc, item) => {
      item.completed ? (acc.completed += 1) : (acc.active += 1);
      return acc;
    },
    { active: 0, completed: 0 },
  );

  // const tasksCount = useSelector(selectTasksCountMemo);

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed}</p>
    </div>
  );
};
