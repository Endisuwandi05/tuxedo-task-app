import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="">
      <h1 className="font-bold">
        <Link to="/">Tuxedo</Link>
      </h1>
      <ul>
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
