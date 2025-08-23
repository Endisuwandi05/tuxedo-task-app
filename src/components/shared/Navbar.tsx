import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="flex flex-col gap-y-8">
      <ul className="flex flex-col gap-y-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
