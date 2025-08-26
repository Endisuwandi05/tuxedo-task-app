// import { Link } from "react-router";

// export function Navbar() {
//   return (
//     <nav className="flex bg-amber-200 p-4">
//       <ul className=" flex flex-col gap-y-8">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/memulai">Memulai</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// src/components/Navbar.tsx

import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="flex flex-col w-64 p-4 border-r border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul className="flex flex-col gap-y-2">
        <li className="px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 rounded-lg transition-colors">
          <Link to="/memulai">Memulai</Link>
        </li>
      </ul>
    </nav>
  );
}
