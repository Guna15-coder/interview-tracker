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
    <div className="p-6 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6 text-[#E8FD59]">
        📘 DSA Topic Tracker
      </h2>

      {data.map((category, catIdx) => (
        <div key={category.category} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-[#E8FD59]">
            {category.category}
          </h3>

          <div className="space-y-4">
            {category.topics.map((topic, topicIdx) => (
              <div
                key={topic.name}
                className="bg-[#2B2927] p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <span className="text-lg">{topic.name}</span>

                <select
                  value={topic.status}
                  onChange={(e) =>
                    handleStatusChange(catIdx, topicIdx, e.target.value)
                  }
                  className="bg-[#E8FD59] text-black text-sm font-semibold px-3 py-1 rounded-md shadow focus:outline-none"
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
