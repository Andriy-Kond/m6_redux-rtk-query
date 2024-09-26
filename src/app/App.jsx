import { Route, Routes } from "react-router-dom";

import { Home, NotFound, SharedLayout } from "pages";
import Tasks from "features/tasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} end>
          <Route index element={<Home />} />
          <Route path="tasks/*" element={<Tasks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
