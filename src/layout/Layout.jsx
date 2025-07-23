import Navbar from "./Navbar";
import Sidebar from "./Sidebar"


export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar />
        <main className="p-6 mont-font overflow-y-auto flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
