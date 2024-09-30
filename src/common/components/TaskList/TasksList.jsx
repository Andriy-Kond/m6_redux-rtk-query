// import { useSelector } from "react-redux";
import { selectFilters, selectVisibleTasksMemo } from "app/selectors";
import css from "./TasksList.module.css";

import // selectVisibleTasks,
// selectVisibleTasksMemo,
// selectFilters, selectTasks,
"app/selectors";
import { statusFilters } from "features/filters/constants";
import { Task } from "common/components/Task/Task";
import { useFetchTasksQuery } from "features/tasks/tasksSlice";
import { useSelector } from "react-redux";
import { memo, useMemo } from "react";

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

export const TasksList = () => {
  // const { items } = useSelector(selectTasks);
  // const statusFilter = useSelector(selectFilters);
  // const visibleTasks = getVisibleTasks(items, statusFilter);
  // const visibleTasks = useSelector(selectVisibleTasksMemo);

  // ^ Приклад:
  // ^ Забрати матеріал по id на окремій сторінці, якщо це потрібно:
  // const { materialId } = useParams();
  // const { data: material, isLoading, isFetching } = useFetchTaskByIdQuery(materialId);

  // ^ Опції хуків запиту:
  // & Щоб хук запускався лише тоді коли є реальний materialId треба передати об'єкт налаштувань. В ньому є skip - коли він true хук не буде робити запити:
  // const { data: material, isLoading, isFetching } = useFetchTaskByIdQuery(materialId, {
  //   skip: materialId === "",
  // або:
  //   skip: !materialId
  // });

  // & Якщо треба робити запит через певний час, то є опція pollingInterval (наприклад, для сповіщення користувача):
  // const { data: material, isLoading, isFetching } = useFetchTaskByIdQuery(materialId, {
  //   skip: !materialId,
  //   pollingInterval: 3000, // буде робити запит раз у 3 секунди
  // });

  // & Якщо треба робити запит через певний час, то є опція pollingInterval (наприклад, для сповіщення користувача):
  // const { data: material, isLoading, isFetching } = useFetchTaskByIdQuery(materialId, {
  //   skip: !materialId,
  //   pollingInterval: 3000, // буде робити запит раз у 3 секунди
  //   refetchOnFocus, // Робить refetch при перемиканні на іншу сторінку і назад. Щоб працювало обов'язково у store.js додати рядок: setupListeners(store.dispatch);
  //   refetchOnReconnect, // Робить refetch при втраті і повторному встановленні зв'язку. Щоб працювало обов'язково у store.js додати рядок: setupListeners(store.dispatch);
  // });

  const { data: tasks } = useFetchTasksQuery();
  const filter = useSelector(selectFilters);

  // const visibleTasks = useMemo(() => {
  //   console.log("getVisibleTasks");
  //   switch (filter) {
  //     case statusFilters.active:
  //       return tasks.filter(task => !task.completed);
  //     case statusFilters.completed:
  //       return tasks.filter(task => task.completed);
  //     default:
  //       return tasks;
  //   }
  // }, [tasks, filter]);

  // const getVisibleTasks = (tasks, filter) => {
  //   console.log("getVisibleTasks");
  //   switch (filter) {
  //     case statusFilters.active:
  //       return tasks.filter(task => !task.completed);
  //     case statusFilters.completed:
  //       return tasks.filter(task => task.completed);
  //     default:
  //       return tasks;
  //   }
  // };

  // const visibleTasks = getVisibleTasks(tasks, filter);
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
