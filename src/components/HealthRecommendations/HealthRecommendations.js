import React, { useState } from "react";
import "./HealthRecommendations.scss";

const HealthRecommendations = () => {
  const [activeTab, setActiveTab] = useState("diet");
  const [healthData, setHealthData] = useState({
    age: 42,
    weight: 185,
    height: 70,
    conditions: ["Hypertension", "Prediabetes"],
    medications: ["Lisinopril", "Metformin"],
    activityLevel: "Moderate",
    goals: ["Lose weight", "Lower blood pressure"],
  });

  // Hardcoded recommendations
  const recommendations = {
    diet: [
      {
        id: 1,
        title: "DASH Diet",
        description:
          "Dietary Approaches to Stop Hypertension focuses on fruits, vegetables, whole grains, and lean proteins.",
        benefits: "Can help lower blood pressure and support weight loss",
        rating: 4.8,
        meals: [
          {
            time: "Breakfast",
            items: "Oatmeal with berries and walnuts, low-fat milk",
          },
          {
            time: "Lunch",
            items:
              "Grilled chicken salad with mixed greens, olive oil dressing",
          },
          {
            time: "Dinner",
            items: "Baked salmon, quinoa, steamed broccoli",
          },
        ],
      },
      {
        id: 2,
        title: "Mediterranean Diet",
        description:
          "Emphasizes plant-based foods, healthy fats, and moderate fish and poultry consumption.",
        benefits:
          "Associated with improved heart health and blood sugar control",
        rating: 4.7,
        meals: [
          {
            time: "Breakfast",
            items: "Greek yogurt with honey and almonds",
          },
          {
            time: "Lunch",
            items: "Whole grain pita with hummus and vegetables",
          },
          {
            time: "Dinner",
            items: "Grilled fish with roasted vegetables and brown rice",
          },
        ],
      },
    ],
    exercise: [
      {
        id: 1,
        title: "Cardiovascular Routine",
        description:
          "30 minutes of moderate-intensity exercise most days of the week",
        benefits:
          "Improves heart health, aids in weight loss, and helps control blood sugar",
        rating: 4.9,
        activities: [
          "Brisk walking (30 min)",
          "Swimming (30 min)",
          "Cycling (30 min)",
        ],
        schedule: "Monday, Wednesday, Friday, Sunday",
      },
      {
        id: 2,
        title: "Strength Training",
        description: "Full-body resistance training 2-3 times per week",
        benefits:
          "Builds muscle, increases metabolism, improves insulin sensitivity",
        rating: 4.6,
        activities: [
          "Bodyweight exercises (push-ups, squats, lunges)",
          "Resistance bands or light dumbbells",
          "Core exercises (planks, crunches)",
        ],
        schedule: "Tuesday, Thursday",
      },
    ],
    lifestyle: [
      {
        id: 1,
        title: "Stress Management",
        description: "Techniques to reduce stress and lower blood pressure",
        benefits: "Reduces cortisol levels, improves overall well-being",
        rating: 4.5,
        activities: [
          "10-minute morning meditation",
          "Deep breathing exercises",
          "Yoga or tai chi 2-3 times per week",
        ],
      },
      {
        id: 2,
        title: "Sleep Hygiene",
        description: "Improving sleep quality and duration",
        benefits:
          "Better blood sugar control, improved recovery, reduced stress",
        rating: 4.7,
        activities: [
          "Consistent bedtime routine",
          "Limit screen time before bed",
          "Keep bedroom cool and dark",
        ],
      },
    ],
  };

  return (
    <div className="health-recommendations">
      <h1>Personalized Health Recommendations</h1>
      <p>AI-generated plans tailored to your health profile and goals</p>

      <div className="profile-summary">
        <h2>Your Health Profile</h2>
        <div className="profile-grid">
          <div>
            <label>Age:</label>
            <p>{healthData.age}</p>
          </div>
          <div>
            <label>Weight:</label>
            <p>{healthData.weight} lbs</p>
          </div>
          <div>
            <label>Height:</label>
            <p>{healthData.height} inches</p>
          </div>
          <div>
            <label>Conditions:</label>
            <p>{healthData.conditions.join(", ")}</p>
          </div>
          <div>
            <label>Medications:</label>
            <p>{healthData.medications.join(", ")}</p>
          </div>
          <div>
            <label>Activity Level:</label>
            <p>{healthData.activityLevel}</p>
          </div>
          <div className="full-width">
            <label>Health Goals:</label>
            <p>{healthData.goals.join(", ")}</p>
          </div>
        </div>
      </div>

      <div className="recommendations-container">
        <div className="tabs">
          <button
            className={activeTab === "diet" ? "active" : ""}
            onClick={() => setActiveTab("diet")}
          >
            Diet
          </button>
          <button
            className={activeTab === "exercise" ? "active" : ""}
            onClick={() => setActiveTab("exercise")}
          >
            Exercise
          </button>
          <button
            className={activeTab === "lifestyle" ? "active" : ""}
            onClick={() => setActiveTab("lifestyle")}
          >
            Lifestyle
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "diet" && (
            <div className="diet-recommendations">
              {recommendations.diet.map((plan) => (
                <div key={plan.id} className="plan-card">
                  <div className="plan-header">
                    <h3>{plan.title}</h3>
                    <div className="plan-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-value">{plan.rating}</span>
                    </div>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                  <p className="plan-benefits">
                    <strong>Benefits:</strong> {plan.benefits}
                  </p>

                  <div className="meal-plan">
                    <h4>Sample Meal Plan</h4>
                    <div className="meals-grid">
                      {plan.meals.map((meal, index) => (
                        <div key={index} className="meal-card">
                          <h5>{meal.time}</h5>
                          <p>{meal.items}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="plan-actions">
                    <button className="primary-btn">Start This Plan</button>
                    <button className="secondary-btn">Customize</button>
                    <button className="outline-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "exercise" && (
            <div className="exercise-recommendations">
              {recommendations.exercise.map((plan) => (
                <div key={plan.id} className="plan-card">
                  <div className="plan-header">
                    <h3>{plan.title}</h3>
                    <div className="plan-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-value">{plan.rating}</span>
                    </div>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                  <p className="plan-benefits">
                    <strong>Benefits:</strong> {plan.benefits}
                  </p>

                  <div className="activities">
                    <h4>Recommended Activities</h4>
                    <ul>
                      {plan.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="schedule">
                    <h4>Schedule</h4>
                    <p>{plan.schedule}</p>
                  </div>

                  <div className="plan-actions">
                    <button className="primary-btn">Start This Plan</button>
                    <button className="secondary-btn">Customize</button>
                    <button className="outline-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "lifestyle" && (
            <div className="lifestyle-recommendations">
              {recommendations.lifestyle.map((plan) => (
                <div key={plan.id} className="plan-card">
                  <div className="plan-header">
                    <h3>{plan.title}</h3>
                    <div className="plan-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-value">{plan.rating}</span>
                    </div>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                  <p className="plan-benefits">
                    <strong>Benefits:</strong> {plan.benefits}
                  </p>

                  <div className="activities">
                    <h4>Recommended Practices</h4>
                    <ul>
                      {plan.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="plan-actions">
                    <button className="primary-btn">Start This Plan</button>
                    <button className="secondary-btn">Customize</button>
                    <button className="outline-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="progress-tracking">
        <h2>Progress Tracking</h2>
        <div className="tracking-grid">
          <div className="tracking-card">
            <h3>Weight</h3>
            <div className="progress-chart">
              <div className="chart-placeholder">Progress Chart</div>
            </div>
            <p>Current: 185 lbs | Goal: 170 lbs</p>
          </div>
          <div className="tracking-card">
            <h3>Blood Pressure</h3>
            <div className="progress-chart">
              <div className="chart-placeholder">Progress Chart</div>
            </div>
            <p>Current: 135/85 | Goal: 120/80</p>
          </div>
          <div className="tracking-card">
            <h3>Activity</h3>
            <div className="progress-chart">
              <div className="chart-placeholder">Progress Chart</div>
            </div>
            <p>Weekly Target: 150 min | Achieved: 120 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRecommendations;
