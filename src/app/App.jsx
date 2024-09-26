import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  RootSharedLayoutPage,
  SomeTestsPage,
  TasksPage,
} from "pages";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootSharedLayoutPage />} end>
          <Route index element={<HomePage />} />
          <Route path="tasks/*" element={<TasksPage />} />
          <Route path="sometests/*" element={<SomeTestsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
