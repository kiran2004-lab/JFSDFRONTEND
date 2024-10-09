import React, { useState } from 'react';

const StudentDashboard = () => {
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f0f4f8',
    margin: '0',
  };

  const cardStyle = {
    width: '80%',
    maxWidth: '600px',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    background: 'rgba(52, 152, 219, 0.7)', // Semi-transparent background
    color: '#fff',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  };

  const titleStyle = {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const handleFileChange = (e) => {
    setAssignmentFile(e.target.files[0]);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (assignmentFile) {
      setSubmissionMessage(`Successfully submitted ${assignmentFile.name}`);
      setAssignmentFile(null); 
    } else {
      setSubmissionMessage('Please select a file to upload.');
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#2980b9', fontSize: '3rem' }}>Student Dashboard</h1>
      <div style={cardStyle}>
        <h2>Upload Assignment</h2>
        <form onSubmit={handleSubmission}>
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              padding: '10px',
              margin: '10px 0',
              width: '100%',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#000',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              width: '100%',
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')}
          >
            Submit Assignment
          </button>
        </form>
        {submissionMessage && <p style={{ marginTop: '10px', color: '#27ae60' }}>{submissionMessage}</p>}
      </div>

      <div style={cardStyle}>
        <h2>Upcoming Assignments</h2>
        <ul>
          <li>Assignment 1: Submit by Oct 10</li>
          <li>Assignment 2: Submit by Oct 15</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2>Your Grades</h2>
        <ul>
          <li>Assignment 1: A</li>
          <li>Assignment 2: B+</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
