import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import SymptomChecker from "./components/SymptomChecker/SymptomChecker";
import Telemedicine from "./components/Telemedicine/Telemedicine";
import PredictiveAnalytics from "./components/PredictiveAnalytics/PredictiveAnalytics";
import ImageAnalysis from "./components/ImageAnalysis/ImageAnalysis";
import HealthRecommendations from "./components/HealthRecommendations/HealthRecommendations";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/telemedicine" element={<Telemedicine />} />
            <Route
              path="/predictive-analytics"
              element={<PredictiveAnalytics />}
            />
            <Route path="/image-analysis" element={<ImageAnalysis />} />
            <Route
              path="/health-recommendations"
              element={<HealthRecommendations />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
