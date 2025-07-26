import React, { useState } from "react";
import "./ImageAnalysis.scss";

const ImageAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  // Hardcoded previous analyses
  const previousAnalyses = [
    {
      id: 1,
      date: "2023-05-10",
      type: "Chest X-Ray",
      result: "No acute cardiopulmonary findings",
      image: "xray-placeholder.jpg",
    },
    {
      id: 2,
      date: "2023-03-15",
      type: "MRI Brain",
      result: "No evidence of acute intracranial abnormality",
      image: "mri-placeholder.jpg",
    },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setAnalysisResult(null);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);

    // Simulate API call
    setTimeout(() => {
      // Hardcoded analysis result
      const mockResult = {
        diagnosis: "Pneumonia (likely bacterial)",
        confidence: "89%",
        findings: [
          "Consolidation in the right lower lobe",
          "Air bronchograms present",
          "No pleural effusion detected",
        ],
        recommendations: [
          "Antibiotic therapy recommended",
          "Follow-up chest X-ray in 4-6 weeks",
          "Consider CBC and CRP blood tests",
        ],
        severity: "Moderate",
      };

      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="image-analysis">
      <h1>Medical Image Analysis</h1>
      <p>
        Upload medical images for AI-powered analysis and diagnosis assistance
      </p>

      <div className="analysis-container">
        <div className="upload-section">
          <h2>Upload New Image</h2>
          <div className="upload-box">
            {selectedImage ? (
              <div className="image-preview">
                <img src={selectedImage} alt="Uploaded for analysis" />
                <div className="image-actions">
                  <button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    className="analyze-btn"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                  </button>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <label className="upload-prompt">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <div className="upload-icon">+</div>
                <p>Drag & drop medical image here or click to browse</p>
                <p className="formats">Supported formats: JPG, PNG, DICOM</p>
              </label>
            )}
          </div>

          {analysisResult && (
            <div className="analysis-result">
              <h3>AI Analysis Results</h3>
              <div
                className={`result-card ${analysisResult.severity.toLowerCase()}`}
              >
                <div className="result-header">
                  <h4>Diagnosis: {analysisResult.diagnosis}</h4>
                  <span className="confidence-badge">
                    {analysisResult.confidence} confidence
                  </span>
                </div>

                <div className="result-details">
                  <div className="findings">
                    <h5>Key Findings:</h5>
                    <ul>
                      {analysisResult.findings.map((finding, index) => (
                        <li key={index}>{finding}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="recommendations">
                    <h5>Recommendations:</h5>
                    <ul>
                      {analysisResult.recommendations.map(
                        (recommendation, index) => (
                          <li key={index}>{recommendation}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <div className="result-actions">
                  <button className="primary-btn">
                    Save to Medical Records
                  </button>
                  <button className="secondary-btn">Share with Doctor</button>
                  <button className="outline-btn">Get Second Opinion</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="history-section">
          <h2>Previous Analyses</h2>
          {previousAnalyses.length > 0 ? (
            <div className="analyses-list">
              {previousAnalyses.map((analysis) => (
                <div key={analysis.id} className="analysis-card">
                  <div className="analysis-image">
                    <img src={analysis.image} alt={analysis.type} />
                  </div>
                  <div className="analysis-info">
                    <h4>{analysis.type}</h4>
                    <p className="date">{analysis.date}</p>
                    <p className="result">{analysis.result}</p>
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No previous analyses found.</p>
          )}
        </div>
      </div>

      <div className="info-section">
        <h2>About Our AI Image Analysis</h2>
        <p>
          Our platform uses advanced deep learning models trained on millions of
          medical images to assist healthcare providers in detecting
          abnormalities and making diagnoses. The AI can analyze various types
          of medical imaging including:
        </p>
        <ul>
          <li>X-Rays (chest, skeletal)</li>
          <li>CT Scans</li>
          <li>MRI</li>
          <li>Ultrasound</li>
          <li>Dermatology images</li>
        </ul>
        <p className="disclaimer">
          Note: AI analysis is for assistance only and should not replace
          professional medical diagnosis.
        </p>
      </div>
    </div>
  );
};

export default ImageAnalysis;
