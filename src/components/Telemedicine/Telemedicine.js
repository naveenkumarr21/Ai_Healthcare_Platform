import React, { useState } from "react";
import "./Telemedicine.scss";

const Telemedicine = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isCallStarted, setIsCallStarted] = useState(false);

  // Hardcoded data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Practitioner",
      rating: 4.8,
      available: true,
      image: "doctor-avatar.jpg",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      rating: 4.9,
      available: false,
      image: "doctor-avatar.jpg",
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      specialty: "Pediatrician",
      rating: 4.7,
      available: true,
      image: "doctor-avatar.jpg",
    },
  ];

  const appointments = {
    upcoming: [
      {
        id: 1,
        doctor: "Dr. Sarah Johnson",
        date: "2023-06-15",
        time: "10:30 AM",
        type: "Follow-up",
      },
      {
        id: 2,
        doctor: "Dr. Emily Wilson",
        date: "2023-06-20",
        time: "2:00 PM",
        type: "Annual Checkup",
      },
    ],
    past: [
      {
        id: 3,
        doctor: "Dr. Michael Chen",
        date: "2023-05-10",
        time: "11:00 AM",
        type: "Consultation",
        notes: "Prescribed medication, follow up in 2 weeks",
      },
    ],
  };

  const startCall = () => {
    setIsCallStarted(true);
  };

  const endCall = () => {
    setIsCallStarted(false);
  };

  return (
    <div className="telemedicine">
      <h1>Telemedicine Platform</h1>

      {!isCallStarted ? (
        <>
          <div className="tabs">
            <button
              className={activeTab === "upcoming" ? "active" : ""}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Appointments
            </button>
            <button
              className={activeTab === "past" ? "active" : ""}
              onClick={() => setActiveTab("past")}
            >
              Past Appointments
            </button>
            <button
              className={activeTab === "doctors" ? "active" : ""}
              onClick={() => setActiveTab("doctors")}
            >
              Find Doctors
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "upcoming" && (
              <div className="appointments-list">
                <h2>Upcoming Appointments</h2>
                {appointments.upcoming.length > 0 ? (
                  <ul>
                    {appointments.upcoming.map((appointment) => (
                      <li key={appointment.id} className="appointment-card">
                        <div className="appointment-info">
                          <h3>{appointment.doctor}</h3>
                          <p>{appointment.type}</p>
                          <p>
                            {appointment.date} at {appointment.time}
                          </p>
                        </div>
                        <div className="appointment-actions">
                          <button
                            className="start-call-btn"
                            onClick={startCall}
                          >
                            Start Call
                          </button>
                          <button className="reschedule-btn">Reschedule</button>
                          <button className="cancel-btn">Cancel</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No upcoming appointments scheduled.</p>
                )}
                <button className="new-appointment-btn">
                  Schedule New Appointment
                </button>
              </div>
            )}

            {activeTab === "past" && (
              <div className="appointments-list">
                <h2>Past Appointments</h2>
                {appointments.past.length > 0 ? (
                  <ul>
                    {appointments.past.map((appointment) => (
                      <li key={appointment.id} className="appointment-card">
                        <div className="appointment-info">
                          <h3>{appointment.doctor}</h3>
                          <p>{appointment.type}</p>
                          <p>
                            {appointment.date} at {appointment.time}
                          </p>
                          {appointment.notes && (
                            <div className="appointment-notes">
                              <h4>Notes:</h4>
                              <p>{appointment.notes}</p>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No past appointments found.</p>
                )}
              </div>
            )}

            {activeTab === "doctors" && (
              <div className="doctors-list">
                <h2>Available Doctors</h2>
                <div className="search-filter">
                  <input
                    type="text"
                    placeholder="Search by specialty or name"
                  />
                  <select>
                    <option value="">All Specialties</option>
                    <option value="general">General Practice</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="pediatrics">Pediatrics</option>
                  </select>
                </div>

                <div className="doctors-grid">
                  {doctors.map((doctor) => (
                    <div key={doctor.id} className="doctor-card">
                      <div className="doctor-image">
                        <img src={doctor.image} alt={doctor.name} />
                        {doctor.available && (
                          <span className="availability-badge">
                            Available Now
                          </span>
                        )}
                      </div>
                      <div className="doctor-info">
                        <h3>{doctor.name}</h3>
                        <p className="specialty">{doctor.specialty}</p>
                        <div className="rating">
                          <span className="stars">★★★★★</span>
                          <span className="rating-value">{doctor.rating}</span>
                        </div>
                        <div className="doctor-actions">
                          <button className="book-btn">Book Appointment</button>
                          {doctor.available && (
                            <button
                              className="call-now-btn"
                              onClick={startCall}
                            >
                              Call Now
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="ai-assistant">
            <h2>AI Health Assistant</h2>
            <div className="chat-container">
              <div className="chat-messages">
                <div className="message ai">
                  <p>
                    Hello! I'm your AI health assistant. How can I help you
                    today?
                  </p>
                </div>
                <div className="message user">
                  <p>I have a headache and fever</p>
                </div>
                <div className="message ai">
                  <p>
                    I'm sorry to hear that. How long have you had these
                    symptoms?
                  </p>
                </div>
              </div>
              <div className="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="video-call">
          <div className="call-header">
            <h2>Consultation with Dr. Sarah Johnson</h2>
            <p>10:30 AM - June 15, 2023</p>
          </div>

          <div className="video-container">
            <div className="remote-video">
              <div className="video-placeholder">
                <div className="doctor-info">
                  <img src="doctor-avatar.jpg" alt="Doctor" />
                  <h3>Dr. Sarah Johnson</h3>
                  <p>General Practitioner</p>
                </div>
              </div>
            </div>
            <div className="local-video">
              <div className="video-placeholder">
                <p>Your Video</p>
              </div>
            </div>
          </div>

          <div className="call-controls">
            <button className="control-btn mute">
              <i className="icon-mic"></i>
            </button>
            <button className="control-btn video">
              <i className="icon-camera"></i>
            </button>
            <button className="control-btn end-call" onClick={endCall}>
              <i className="icon-phone"></i>
            </button>
            <button className="control-btn chat">
              <i className="icon-chat"></i>
            </button>
            <button className="control-btn share">
              <i className="icon-share"></i>
            </button>
          </div>

          <div className="call-notes">
            <h3>Notes</h3>
            <textarea placeholder="Add notes during your consultation..."></textarea>
          </div>
        </div>
      )}
    </div>
  );
};

export default Telemedicine;
