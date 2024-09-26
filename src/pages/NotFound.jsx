import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      This page doesn't exist.
      <Link to="/">Return to main page</Link>
    </>
  );
}
