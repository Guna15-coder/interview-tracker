import { useState } from "react";

export default function TrackerPage() {
  const [data, setData] = useState([
    {
      category: "Arrays",
      topics: [
        { name: "Two Sum", status: "not-started" },
        { name: "Kadane's Algorithm", status: "in-progress" },
        { name: "Merge Intervals", status: "completed" },
      ],
    },
    {
      category: "Trees",
      topics: [
        { name: "Binary Tree Traversal", status: "completed" },
        { name: "Lowest Common Ancestor", status: "not-started" },
      ],
    },
    {
      category: "Dynamic Programming",
      topics: [
        { name: "0/1 Knapsack", status: "not-started" },
        { name: "Longest Common Subsequence", status: "in-progress" },
      ],
    },
  ]);

  const handleStatusChange = (categoryIndex, topicIndex, newStatus) => {
    const updatedData = [...data];
    updatedData[categoryIndex].topics[topicIndex].status = newStatus;
    setData(updatedData);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">📘 DSA Topic Tracker</h2>

      {data.map((category, catIdx) => (
        <div key={category.category} className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-3">
            {category.category}
          </h3>

          <div className="space-y-3">
            {category.topics.map((topic, topicIdx) => (
              <div
                key={topic.name}
                className="bg-white p-4 shadow rounded flex justify-between items-center"
              >
                <span className="text-gray-800 font-medium">
                  {topic.name}
                </span>

                <select
                  value={topic.status}
                  onChange={(e) =>
                    handleStatusChange(catIdx, topicIdx, e.target.value)
                  }
                  className="px-2 py-1 border rounded text-sm"
                >
                  <option value="not-started">Not Started</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
