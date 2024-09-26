import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      This page doesn't exist.
      <Link to="/">Return to Home Page</Link>
    </>
  );
}
