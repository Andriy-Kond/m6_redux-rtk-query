import { useDispatch, useSelector } from "react-redux";
import css from "./StatusFilter.module.css";
import { Button } from "common/components/Button/Button";

import { selectFilters } from "app/selectors";
import { statusFilters } from "features/tasks/filters/constants";
import { setStatusFilter } from "features/tasks/filters/filtersSlice";

export const StatusFilter = () => {
  const filter = useSelector(selectFilters);

  const dispatch = useDispatch();

  const setFilter = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => setFilter(statusFilters.all)}>
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => setFilter(statusFilters.active)}>
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => setFilter(statusFilters.completed)}>
        Completed
      </Button>
    </div>
  );
};
