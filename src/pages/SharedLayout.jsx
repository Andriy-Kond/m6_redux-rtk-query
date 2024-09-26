import { Link, Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <h1>App Shared Layout Container</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
      <Outlet />
    </>
  );
}
