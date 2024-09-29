import { Link, Outlet } from "react-router-dom";
import css from "./rootSharedLayoutPage.css";
import { Suspense } from "react";

export default function RootSharedLayoutPage() {
  return (
    <main className={css.container}>
      <h2>Root Shared Layout Page</h2>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/sometests">Some Tests</Link>
      </nav>

      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
}
