import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import HomeLayout from "./layout/HomeLayout";
import LoginUser from "./components/Auth/LoginUser";
import RegisterUser from "./components/Auth/RegisterUser";

import Dashboard from "./pages/Dashboard/Dashboard";
import JobTracker from "./pages/Job-tracker/JobTracker";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import CoverLetter from "./pages/CoverLetter";
import JDAnalyzer from "./pages/JDAnalyzer";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/Protected/ProtectedRoutes";
import LockedWrapper from "./components/LockedWrapper";

const App = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register" element={<RegisterUser />} />

      {/* Protected Layout */}
      <Route
        element={
          <ProtectedRoute>
            <HomeLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job-tracker" element={<JobTracker />} />

        <Route path="/resume-analyzer"
          element={
            // <LockedWrapper feature="Resume Analyzer">
              <ResumeAnalyzer />
            // </LockedWrapper>
          }
        />

        <Route path="/cover-letter" element={
          // <LockedWrapper feature="Cover Letter Generator">
            <CoverLetter />
          // </LockedWrapper>
        } />

        <Route path="/jd-analyzer" element={
          // <LockedWrapper feature="JD Analyzer">
            <JDAnalyzer />
          // </LockedWrapper>
        } />

        <Route path="/profile" element={<Profile />} />
      </Route>

    </Routes>
  );
};

export default App;