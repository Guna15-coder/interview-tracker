import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard"
import Layout from "./layout/Layout"
import TrackerPage from "./features/tracker/TrackerPage";
import PlannerPage from "./features/planner/PlannerPage"

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          {/* Add more routes: tracker, planner, resources */}
        </Routes>
      </Layout>
    </Router>
  );
}
