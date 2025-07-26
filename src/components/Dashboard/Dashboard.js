import React from "react";
import "./Dashboard.scss";

const Dashboard = () => {
  // Hardcoded data
  const recentActivities = [
    { id: 1, type: "Consultation", date: "2023-05-15", doctor: "Dr. Smith" },
    {
      id: 2,
      type: "Test Results",
      date: "2023-05-10",
      description: "Blood Work",
    },
    {
      id: 3,
      type: "Prescription",
      date: "2023-05-08",
      medication: "Amoxicillin",
    },
  ];

  const healthMetrics = [
    { name: "Heart Rate", value: "72 bpm", status: "normal" },
    { name: "Blood Pressure", value: "120/80 mmHg", status: "normal" },
    { name: "Glucose Level", value: "95 mg/dL", status: "normal" },
    { name: "Oxygen Level", value: "98%", status: "normal" },
  ];

  return (
    <div className="dashboard">
      <h1>Welcome to Your Health Dashboard</h1>

      <div className="dashboard-grid">
        <div className="health-overview">
          <h2>Health Overview</h2>
          <div className="metrics-grid">
            {healthMetrics.map((metric, index) => (
              <div key={index} className={`metric-card ${metric.status}`}>
                <h3>{metric.name}</h3>
                <p>{metric.value}</p>
                <span className="status-badge">{metric.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn primary">Start Symptom Check</button>
            <button className="action-btn secondary">
              Schedule Appointment
            </button>
            <button className="action-btn">Upload Medical Image</button>
            <button className="action-btn">View Health Recommendations</button>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="activity-item">
                <div className="activity-type">{activity.type}</div>
                <div className="activity-date">{activity.date}</div>
                <div className="activity-details">
                  {activity.doctor && <span>With {activity.doctor}</span>}
                  {activity.description && <span>{activity.description}</span>}
                  {activity.medication && (
                    <span>Prescribed {activity.medication}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
