import React from "react";
import "./main.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Acadify</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Dashboard</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Acadify !</h1>
        <p>
          Empowering students and teachers through high-quality online learning resources.
          Our platform offers free access to expertly designed courses from top universities and instructors — helping you learn at your own pace, anytime, anywhere.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>
      <img
        src="https://www.pixelmattic.com/wp-content/uploads/2016/12/10-elearning-website-features.jpg"
        alt="Learning Illustration"
        className="hero-image"
      />
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <h2>Why Choose Acadify?</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Expert Instructors</h3>
          <p>Learn directly from professors, industry professionals, and certified educators with years of teaching and research experience.
             Each course is designed to make complex topics simple and easy to understand.</p>
        </div>
        <div className="feature-card">
          <h3>Accessible on All Devices</h3>
          <p>Study anytime, anywhere — whether on your laptop, tablet, or smartphone. 
            The platform is optimized for smooth performance across all devices, so you can keep learning without interruptions.</p>
        </div>
        <div className="feature-card">
          <h3>Engaging and Interactive Learning</h3>
          <p>Go beyond traditional learning! Participate in interactive quizzes, real-world assignments, and 
            discussion forums to test your understanding and connect with peers and instructors in real time.</p>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="dashboard-section">
      <h2>Take a Look at Our Student Dashboard</h2>
      <p>
        Here’s a quick preview of how your personalized dashboard will look —
        track your courses, progress, and performance all in one place.
      </p>

      <img
        src="https://www.adminuiux.com/wp-content/uploads/2024/12/our-achievements-bootstrap-html-admin-dashboard-template-adminuiux-com.png"
        alt="Dashboard Preview"
        className="dashboard-image"
      />
      <p>
        
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">

    {/* About Section */}
    <div className="footer-section">
      <h3>About Acadify</h3>
      <p>
        Acadify is an online learning platform dedicated to providing free,
        high-quality educational resources to students and teachers. We aim
        to make learning accessible, interactive, and skill-oriented.
      </p>
    </div>

    {/* Quick Links */}
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Instructor Portal</li>
        <li>Student Dashboard</li>
        <li>Certificates</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </div>

    {/* Support */}
    <div className="footer-section">
      <h3>Support</h3>
      <ul>
        <li>Help Center</li>
        <li>FAQs</li>
        <li>Email Support</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-section">
      <h3>Contact</h3>
      <p> Pune, India</p>
      <p> support@acadify.edu.in</p>
      <p> +91 98765 43210</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2025 Acadify. All Rights Reserved. | Designed with ❤️ by the Acadify Team</p>
  </div>
</footer>

  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features />
      <DashboardPreview />
      <Footer />
    </div>
  );
}

export default App;