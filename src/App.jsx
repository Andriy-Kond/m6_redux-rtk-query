import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "reduxTools/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const { items, isLoading, error } = useSelector(state => state.tasks);

  return (
    <>
      {/* <button onClick={() => dispatch(fetchTasks())}></button> */}
      <div>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      </div>
    </>
  );
}

export default App;
