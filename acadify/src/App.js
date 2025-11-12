// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import StudentDashboard from "./student";
import TeacherDashboard from "./teacher";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page (default route) */}
        <Route path="/" element={<Main />} />

        {/* Student Dashboard */}
        <Route path="/student" element={<StudentDashboard username="Lily" />} />

        {/* Teacher Dashboard */}
        <Route path="/teacher" element={<TeacherDashboard username="Dr. xyz" />} />
      </Routes>
    </Router>
  );
}

export default App;


