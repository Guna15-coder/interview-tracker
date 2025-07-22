import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard"
import Layout from "./layout/Layout"
import TrackerPage from "./features/tracker/TrackerPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tracker" element={<TrackerPage />} />
          {/* Add more routes: tracker, planner, resources */}
        </Routes>
      </Layout>
    </Router>
  );
}
