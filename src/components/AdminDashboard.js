import React, { useState } from 'react';

const AdminDashboard = () => {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [postMessage, setPostMessage] = useState('');

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

  const handlePostAssignment = (e) => {
    e.preventDefault();
    if (assignmentTitle && assignmentDescription) {
      setPostMessage(`Successfully posted "${assignmentTitle}" assignment.`);
      setAssignmentTitle('');
      setAssignmentDescription('');
    } else {
      setPostMessage('Please fill in all fields.');
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#2980b9', fontSize: '3rem' }}>Faculty Dashboard</h1>
      <div style={cardStyle}>
        <h2>Post Assignment</h2>
        <form onSubmit={handlePostAssignment}>
          <input
            type="text"
            placeholder="Assignment Title"
            value={assignmentTitle}
            onChange={(e) => setAssignmentTitle(e.target.value)}
            style={{
              padding: '10px',
              margin: '10px 0',
              width: '100%',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#000',
            }}
          />
          <textarea
            placeholder="Assignment Description"
            value={assignmentDescription}
            onChange={(e) => setAssignmentDescription(e.target.value)}
            style={{
              padding: '10px',
              margin: '10px 0',
              width: '100%',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#000',
              minHeight: '80px',
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
            Post Assignment
          </button>
        </form>
        {postMessage && <p style={{ marginTop: '10px', color: '#27ae60' }}>{postMessage}</p>}
      </div>

      <div style={cardStyle}>
        <h2>Assignments</h2>
        <ul>
          <li>Assignment 1: Due Oct 10</li>
          <li>Assignment 2: Due Oct 15</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2>Grades</h2>
        <ul>
          <li>Student A: Assignment 1 - A</li>
          <li>Student B: Assignment 1 - B+</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
