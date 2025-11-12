// src/Teacher.js
import React, { useState } from "react";
import "./teacher.css";

function TeacherDashboard({ username = "Teacher" }) {
  const [activeTab, setActiveTab] = useState("students");
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({ title: "", url: "" });

  const students = [
    { name: "Lily Adams", course: "Data Science", progress: "80%", marks: 85 },
    { name: "Aditi Sharma", course: "AI Fundamentals", progress: "60%", marks: 72 },
    { name: "Rohit Mehta", course: "Cloud Computing", progress: "75%", marks: 78 },
  ];

  const handleVideoUpload = (e) => {
    e.preventDefault();
    if (newVideo.title && newVideo.url) {
      setVideos([...videos, newVideo]);
      setNewVideo({ title: "", url: "" });
    }
  };

  return (
    <div className="teacher-dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">Acadify</div>
        <ul className="nav-links">
          <li onClick={() => setActiveTab("students")}>Students</li>
          <li onClick={() => setActiveTab("upload")}>Upload Lectures</li>
          <li onClick={() => setActiveTab("marks")}>Assessments</li>
        </ul>
        <div className="teacher-name">Hi, {username}</div>
      </nav>

      <div className="dashboard-content">
        {/* Students Tab */}
        {activeTab === "students" && (
          <section className="students-section">
            <h2>Enrolled Students</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Progress</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, index) => (
                  <tr key={index}>
                    <td>{s.name}</td>
                    <td>{s.course}</td>
                    <td>{s.progress}</td>
                    <td>{s.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Upload Lectures Tab */}
        {activeTab === "upload" && (
          <section className="upload-section">
            <h2>Upload New Lecture</h2>
            <form onSubmit={handleVideoUpload}>
              <input
                type="text"
                placeholder="Lecture Title"
                value={newVideo.title}
                onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                required
              />
              <input
                type="url"
                placeholder="Lecture Video URL"
                value={newVideo.url}
                onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
                required
              />
              <button type="submit">Upload</button>
            </form>

            <div className="uploaded-videos">
              <h3>Uploaded Lectures</h3>
              {videos.length > 0 ? (
                videos.map((video, index) => (
                  <div key={index} className="video-item">
                    <h4>{video.title}</h4>
                    <a href={video.url} target="_blank" rel="noreferrer">
                      Watch Video
                    </a>
                  </div>
                ))
              ) : (
                <p>No lectures uploaded yet.</p>
              )}
            </div>
          </section>
        )}

        {/* Assessments Tab */}
        {activeTab === "marks" && (
          <section className="marks-section">
            <h2>Student Assessment Marks</h2>
            <ul>
              {students.map((s, index) => (
                <li key={index}>
                  <strong>{s.name}</strong> — {s.course}: {s.marks} / 100
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

export default TeacherDashboard;