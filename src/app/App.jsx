import { useDispatch, useSelector } from "react-redux";

import { counterValue } from "./selectors";
import { decrement, increment } from "reduxTools/slice";

function App() {
  const count = useSelector(counterValue);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
