import { selectVisibleTasksMemo } from "app/selectors";
import css from "./TasksList.module.css";

import { Task } from "common/components/Task/Task";

import { useSelector } from "react-redux";

export const TasksList = () => {
  const visibleTasks = useSelector(selectVisibleTasksMemo);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
