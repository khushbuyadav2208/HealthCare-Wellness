'use client';

export default function Dashboard() {
  return (
    <div className="container">
      {/* Left Sidebar with Providers */}
      <div className="sidebar">
        <h3>HEALTH</h3>
        <ul>
          <li>Dashboard</li>
          <li>My Profile</li>
          <li>Providers</li>
          <li>Messages</li>
          <li>Wellness Goals</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Welcome,</h1>
        </div>

        <div className="wellness-section">
          <h2>Wellness Goals</h2>
          <div className="goals-grid">
            {/* Steps Goal */}
            <div className="goal-card">
              <div className="goal-header">
                <span className="goal-icon">🚶</span>
                <span className="goal-title">Steps</span>
              </div>
              <div className="goal-value">
                3620 <span style={{fontSize: '14px', color: '#999'}}>/10000 steps</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '36%'}}></div>
              </div>
            </div>

            {/* Active Time Goal */}
            <div className="goal-card">
              <div className="goal-header">
                <span className="goal-icon">⏱️</span>
                <span className="goal-title">Active Time</span>
              </div>
              <div className="goal-value">
                56 <span style={{fontSize: '14px', color: '#999'}}>/60 mins</span>
              </div>
              <div className="goal-target">1712 kcal | 1.23kc</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '93%'}}></div>
              </div>
            </div>

            {/* Sleep Goal */}
            <div className="goal-card">
              <div className="goal-header">
                <span className="goal-icon">😴</span>
                <span className="goal-title">Sleep</span>
              </div>
              <div className="goal-value">
                6 hrs 30 <span style={{fontSize: '14px', color: '#999'}}>mins</span>
              </div>
              <div className="goal-time">11:30 pm - 06:00 am</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '81%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="reminders-section">
          <h3>Preventive Care Reminders</h3>
          <div className="reminder-item">
            <span>Upcoming Annual blood test on 23rd Jan 2025</span>
          </div>
        </div>

        <div className="tip-section">
          <h3>Health Tip of the Day</h3>
          <p>Stay hydrated! Aim to drink at least 8 glasses of water per day.</p>
        </div>
      </div>
    </div>
  );
}