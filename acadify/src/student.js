// src/App.js
import React, { useState } from "react";
import "./student.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="brand">Acadify</div>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search courses..." className="search-bar" />
        <button className="btn">Browse Courses</button>
        <div className="profile">Hi, student</div>
      </div>
    </nav>
  );
}

function Sidebar({ activeTab, setActiveTab }) {
  const categories = ["Courses", "Assessments", "Assignments", "Quizzes", "Questioning"];
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={activeTab === cat ? "active" : ""}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainContent({ activeTab }) {
  return (
    <div className="main-content">
      <h1>Welcome Back !</h1>

      {activeTab === "Courses" && (
        <div className="cards">
          <div className="card">
            <h3>Total Courses</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Completed Courses</h3>
            <p>3</p>
          </div>
        </div>
      )}

      {activeTab === "Assessments" && (
        <div className="section">
          <h2>Upcoming Assessments</h2>
          <ul>
            <li>Math Quiz - Nov 5, 2025</li>
            <li>Physics Assignment - Nov 7, 2025</li>
          </ul>
        </div>
      )}

      {activeTab === "Assignments" && (
        <div className="section">
          <h2>Recent Assignments</h2>
          <ul>
            <li>Math Assignment - Submitted</li>
            <li>Chemistry Lab Report - Pending</li>
          </ul>
        </div>
      )}

      {activeTab === "Quizzes" && (
        <div className="section">
          <h2>Recent Quizzes</h2>
          <ul>
            <li>AI Basics Quiz - Score: 85%</li>
            <li>Cloud Computing Quiz - Score: 70%</li>
          </ul>
        </div>
      )}

      {activeTab === "Questioning" && (
        <div className="section">
          <h2>Discussion & Questions</h2>
          <ul>
            <li>Asked: How to implement neural networks?</li>
            <li>Answered: What is Big Data?</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("Courses");

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainContent activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;

