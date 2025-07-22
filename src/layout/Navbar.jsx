export default function Navbar() {
    return (
      <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">CodeBuddy</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Welcome, Guna 👋</span>
          <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </nav>
    );
  }
  