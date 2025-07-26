import React, { useState } from "react";
import "./SymptomChecker.scss";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Hardcoded results
      const mockResults = {
        possibleConditions: [
          {
            name: "Common Cold",
            probability: "65%",
            description: "Viral infection of the upper respiratory tract",
          },
          {
            name: "Allergic Rhinitis",
            probability: "25%",
            description: "Allergic reaction causing nasal congestion",
          },
          {
            name: "Influenza",
            probability: "10%",
            description: "Viral infection with fever and body aches",
          },
        ],
        recommendedActions: [
          "Rest and drink plenty of fluids",
          "Consider over-the-counter antihistamines for allergies",
          "Monitor for fever above 101°F (38.3°C)",
          "Consult a doctor if symptoms worsen or persist beyond 7 days",
        ],
        severity: "Mild",
      };

      setResults(mockResults);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="symptom-checker">
      <h1>Symptom Checker</h1>
      <p>Enter your symptoms to get possible conditions and recommendations</p>

      <div className="checker-container">
        <form onSubmit={handleSubmit} className="symptom-form">
          <div className="form-group">
            <label htmlFor="symptoms">Describe your symptoms:</label>
            <textarea
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="E.g., headache, fever, cough for 3 days..."
              required
            />
          </div>

          <div className="form-group">
            <label>Additional Information:</label>
            <div className="additional-info">
              <div>
                <label htmlFor="duration">Duration:</label>
                <select id="duration">
                  <option value="1-2">1-2 days</option>
                  <option value="3-5">3-5 days</option>
                  <option value="6-10">6-10 days</option>
                  <option value="10+">More than 10 days</option>
                </select>
              </div>

              <div>
                <label htmlFor="severity">Severity:</label>
                <select id="severity">
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Check Symptoms"}
          </button>
        </form>

        {results && (
          <div className="results-container">
            <h2>Analysis Results</h2>
            <div className="severity-indicator">
              <span className={`severity-${results.severity.toLowerCase()}`}>
                {results.severity} Condition
              </span>
            </div>

            <div className="possible-conditions">
              <h3>Possible Conditions</h3>
              <ul>
                {results.possibleConditions.map((condition, index) => (
                  <li key={index} className="condition">
                    <div className="condition-name">
                      {condition.name}{" "}
                      <span className="probability">
                        {condition.probability}
                      </span>
                    </div>
                    <div className="condition-description">
                      {condition.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="recommended-actions">
              <h3>Recommended Actions</h3>
              <ul>
                {results.recommendedActions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>

            <div className="follow-up">
              <h3>Follow-up Care</h3>
              <p>Based on your symptoms, we recommend:</p>
              <button className="secondary-btn">
                Schedule a Telemedicine Appointment
              </button>
              <button className="outline-btn">Find Nearby Clinics</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
