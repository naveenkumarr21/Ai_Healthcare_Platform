import React from "react";
import "./PredictiveAnalytics.scss";

const PredictiveAnalytics = () => {
  // Hardcoded data
  const patientData = {
    name: "John Doe",
    age: 45,
    gender: "Male",
    lastAdmission: "2023-03-15",
    diagnosis: "Type 2 Diabetes",
    riskScore: 0.72,
    riskLevel: "High",
    factors: [
      { name: "Chronic Condition", value: "Diabetes", impact: "High" },
      { name: "Previous Admissions", value: "3 in last year", impact: "High" },
      { name: "Medication Adherence", value: "75%", impact: "Medium" },
      { name: "Follow-up Compliance", value: "60%", impact: "Medium" },
      { name: "Social Support", value: "Limited", impact: "Medium" },
    ],
    trends: [
      { month: "Jan", admissions: 1 },
      { month: "Feb", admissions: 0 },
      { month: "Mar", admissions: 1 },
      { month: "Apr", admissions: 0 },
      { month: "May", admissions: 0 },
      { month: "Jun", admissions: 0 },
    ],
    recommendations: [
      "Schedule monthly follow-up appointments",
      "Enroll in diabetes management program",
      "Improve medication adherence through reminders",
      "Assess social support needs",
      "Monitor glucose levels more frequently",
    ],
  };

  return (
    <div className="predictive-analytics">
      <h1>Predictive Analytics Dashboard</h1>
      <p className="subtitle">Patient Readmission Risk Assessment</p>

      <div className="patient-overview">
        <div className="patient-info">
          <h2>Patient Information</h2>
          <div className="info-grid">
            <div>
              <label>Name:</label>
              <p>{patientData.name}</p>
            </div>
            <div>
              <label>Age:</label>
              <p>{patientData.age}</p>
            </div>
            <div>
              <label>Gender:</label>
              <p>{patientData.gender}</p>
            </div>
            <div>
              <label>Last Admission:</label>
              <p>{patientData.lastAdmission}</p>
            </div>
            <div>
              <label>Primary Diagnosis:</label>
              <p>{patientData.diagnosis}</p>
            </div>
          </div>
        </div>

        <div className="risk-score">
          <h2>Readmission Risk</h2>
          <div
            className={`score-display ${patientData.riskLevel.toLowerCase()}`}
          >
            <div className="score-value">
              {Math.round(patientData.riskScore * 100)}%
            </div>
            <div className="score-label">{patientData.riskLevel} Risk</div>
          </div>
          <p className="score-description">
            Based on historical data and predictive modeling, this patient has a{" "}
            {Math.round(patientData.riskScore * 100)}% probability of hospital
            readmission within 30 days of discharge.
          </p>
        </div>
      </div>

      <div className="analytics-content">
        <div className="risk-factors">
          <h2>Key Risk Factors</h2>
          <div className="factors-grid">
            {patientData.factors.map((factor, index) => (
              <div key={index} className="factor-card">
                <h3>{factor.name}</h3>
                <p className="factor-value">{factor.value}</p>
                <div className={`impact-badge ${factor.impact.toLowerCase()}`}>
                  {factor.impact} Impact
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trends-visualization">
          <h2>Admission Trends</h2>
          <div className="chart-container">
            <div className="chart-placeholder">
              <p>Admissions Trend Chart</p>
              <div className="chart-bars">
                {patientData.trends.map((trend, index) => (
                  <div key={index} className="chart-bar-container">
                    <div
                      className="chart-bar"
                      style={{ height: `${trend.admissions * 50}px` }}
                    ></div>
                    <div className="chart-label">{trend.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recommendations">
        <h2>Intervention Recommendations</h2>
        <ul>
          {patientData.recommendations.map((recommendation, index) => (
            <li key={index}>
              <input type="checkbox" id={`rec-${index}`} />
              <label htmlFor={`rec-${index}`}>{recommendation}</label>
            </li>
          ))}
        </ul>
        <button className="generate-plan-btn">Generate Care Plan</button>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
