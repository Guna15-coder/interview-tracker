import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Tracker", path: "/tracker" },
    { label: "Planner", path: "/planner" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <aside className="bg-gray-100 w-60 h-screen p-5 mont-font shadow-md">
      <div className="font-bold text-xl mb-6">Menu</div>
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded hover:bg-[#22201F]/90 hover:text-white ${
                  isActive ? "bg-[#22201F] text-white font-semibold" : "text-black"
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
