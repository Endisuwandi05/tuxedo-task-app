import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="flex flex-col w-64 p-4 border-r border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Tuxedo App</h2>
      <ul className="flex flex-col gap-y-2">
        <Link
          to="/"
          className="px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          Home
        </Link>

        <Link
          to="/onboard"
          className="px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          Start
        </Link>
      </ul>
    </nav>
  );
}
