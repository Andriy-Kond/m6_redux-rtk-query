import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./operations";
import { selectTasks } from "app/selectors";

export default function Tasks() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {items.length > 0 && !error && (
        <ul>
          {items.map(item => (
            <li id={item.id}>
              <p>{item.task}</p>
              <span>{item.createdAt}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
