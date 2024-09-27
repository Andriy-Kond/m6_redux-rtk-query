// import { useSelector } from "react-redux";
import css from "./TaskList.module.css";

import // selectVisibleTasks,
// selectVisibleTasksMemo,
// selectFilters, selectTasks,
"app/selectors";
// import { statusFilters } from "features/?filters/constants";
import { Task } from "common/components/Task/Task";
import { useFetchTasksQuery } from "features/tasks/tasksSlice";

// const getVisibleTasks = (items, filter) => {
//   switch (filter) {
//     case statusFilters.active:
//       return items.filter(item => !item.completed);
//     case statusFilters.completed:
//       return items.filter(item => item.completed);
//     default:
//       return items;
//   }
// };

export const TaskList = () => {
  // const { items } = useSelector(selectTasks);
  // const statusFilter = useSelector(selectFilters);
  // const visibleTasks = getVisibleTasks(items, statusFilter);
  // const visibleTasks = useSelector(selectVisibleTasksMemo);
  const { data: visibleTasks } = useFetchTasksQuery();

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
