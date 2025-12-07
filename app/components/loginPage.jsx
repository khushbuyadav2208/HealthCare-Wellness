'use client';

export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Redirect to dashboard after login
    window.location.href = '/';
  };

  return (
    <div>
      {/* Header */}
      <div className="portal-header">
        <div className="header-left">
          <h1>Healthcare Portal</h1>
          <ul className="nav-menu">
            <li>Home</li>
            <li>Health Topics</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="login-box">
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="form-links">
            <a href="#">Forgot Password?</a>
            <a href="#">New User? Register here</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content-portal">
        <h2>Latest Health Information</h2>

        <div className="health-cards">
          <div className="health-card">
            <h3>COVID-19 Updates</h3>
            <p>Stay informed about the latest COVID-19 guidelines and vaccination information.</p>
            <button className="read-more-btn">Read More</button>
          </div>

          <div className="health-card">
            <h3>Seasonal Flu Prevention</h3>
            <p>Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.</p>
            <button className="read-more-btn">Read More</button>
          </div>

          <div className="health-card">
            <h3>Mental Health Awareness</h3>
            <p>Explore resources and support options for maintaining good mental health.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}