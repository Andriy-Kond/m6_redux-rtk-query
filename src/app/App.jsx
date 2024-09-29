import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import NotFoundPage from "pages/NotFoundPage";

import { HomePage, RootSharedLayoutPage } from "pages";

const TasksPage = lazy(() => import("pages/TasksPage"));
const SomeTestsPage = lazy(() => import("pages/SomeTestsPage"));

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
