import React from 'react';
import Navbar from './Navbar';

const Features = () => {
  const styles = {
    container: {
      textAlign: 'center',
      background: 'linear-gradient(135deg, #1d2b64, #f8cdda)', // Same background as HomePage
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      paddingTop: '4rem', // Padding for Navbar
    },
    header: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: '700',
    },
    paragraph: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      maxWidth: '700px',
    },
    featureList: {
      listStyle: 'none',
      padding: '0',
      marginTop: '2rem',
      width: '80%',
    },
    featureItem: {
      fontSize: '1.2rem',
      margin: '1rem 0',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '1.5rem',
      borderRadius: '15px',
      width: '100%',
      margin: '1rem auto',
      textAlign: 'left',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Shadow effect
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    featureItemHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)', // Hover effect with scale
    },
  };

  return (
    <div style={styles.container}>
      <Navbar /> {/* Navbar included at the top */}
      <h1 style={styles.header}>Features</h1>
      <p style={styles.paragraph}>
        Explore the key features of our platform designed to make assignment submission and grading seamless.
      </p>
      <ul style={styles.featureList}>
        <li
          style={styles.featureItem}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.featureItemHover })}
          onMouseLeave={(e) => (e.currentTarget.style = { ...styles.featureItem })}
        >
          📚 Easy assignment submission for students.
        </li>
        <li
          style={styles.featureItem}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.featureItemHover })}
          onMouseLeave={(e) => (e.currentTarget.style = { ...styles.featureItem })}
        >
          📝 Grading tools for teachers.
        </li>
        <li
          style={styles.featureItem}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.featureItemHover })}
          onMouseLeave={(e) => (e.currentTarget.style = { ...styles.featureItem })}
        >
          💬 Feedback and comments on submissions.
        </li>
        <li
          style={styles.featureItem}
          onMouseEnter={(e) => (e.currentTarget.style = { ...styles.featureItemHover })}
          onMouseLeave={(e) => (e.currentTarget.style = { ...styles.featureItem })}
        >
          📅 Track deadlines and progress.
        </li>
      </ul>
    </div>
  );
};

export default Features;
