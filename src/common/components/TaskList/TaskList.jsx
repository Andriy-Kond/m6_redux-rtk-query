import { Task } from "common/components/Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";

import { selectFilters, selectTasks } from "app/selectors";
import { statusFilters } from "features/filters/constants";

const getVisibleTasks = (items, filter) => {
  switch (filter) {
    case statusFilters.active:
      return items.filter(item => !item.completed);
    case statusFilters.completed:
      return items.filter(item => item.completed);
    default:
      return items;
  }
};

export const TaskList = () => {
  const { items } = useSelector(selectTasks);
  const statusFilter = useSelector(selectFilters);
  const visibleTasks = getVisibleTasks(items, statusFilter);

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
