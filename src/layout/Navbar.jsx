import Button from "../components/Button";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-black mont-font">
        Goal Tracker
      </h1>

      <div className="flex items-center gap-4">
        {/* Custom Button */}
        <div>
          <Button />
        </div>

        {/* Avatar Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="avatar cursor-pointer">
            <div className="mask mask-squircle w-10">
              <img
                src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
                alt="User Avatar"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box w-48 mt-2 p-2 shadow"
          >
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
