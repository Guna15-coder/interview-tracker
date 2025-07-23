import { useState } from "react";

export default function PlannerPage() {
  const [tasks] = useState([
    {
      id: 1,
      title: "Revise Graph Algorithms",
      dueDate: "2025-07-23",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Mock Interview with Friend",
      dueDate: "2025-07-24",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Submit Resume to Google",
      dueDate: "2025-07-28",
      priority: "Low",
      status: "Completed",
    },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 text-black";
      case "In Progress":
        return "bg-blue-500 text-white";
      case "Completed":
        return "bg-green-600 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#E8FD59]">📅 Planner</h1>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-[#2A2826] hover:bg-[#3b3937] transition p-4 rounded shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <span
                className={`text-xs px-2 py-1 rounded ${getStatusStyle(
                  task.status
                )}`}
              >
                {task.status}
              </span>
            </div>
            <div className="text-sm text-gray-300">
              <p>🗓️ Due: {task.dueDate}</p>
              <p>🔥 Priority: {task.priority}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
