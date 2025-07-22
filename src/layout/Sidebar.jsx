import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Tracker", path: "/tracker" },
    { label: "Planner", path: "/planner" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <aside className="bg-blue-50 w-60 h-screen p-5 shadow-md">
      <div className="font-bold text-xl mb-6">Menu</div>
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded hover:bg-blue-200 ${
                  isActive ? "bg-blue-300 font-semibold" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
