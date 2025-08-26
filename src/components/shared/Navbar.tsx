import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="flex bg-amber-200 p-4">
      <ul className=" flex flex-col gap-y-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/memulai">Memulai</Link>
        </li>
      </ul>
    </nav>
  );
}
