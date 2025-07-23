import DashCard from "./DashCard";
import Table from "./Table"

export default function Dashboard() {
  return (
    <div className="text-black">
      <div>
        <DashCard />
      </div>
      <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
      <Table />
    </div>
  );
}
