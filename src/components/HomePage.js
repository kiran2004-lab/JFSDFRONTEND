import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Hook to navigate between routes

  const styles = {
    homepage: {
      textAlign: 'center',
      background: 'linear-gradient(135deg, #1d2b64, #f8cdda)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.6s ease',
    },
    alert: {
      position: 'absolute',
      top: '0',
      width: '100%',
      backgroundColor: '#ff5f40',
      color: '#fff',
      padding: '0.75rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textAlign: 'center',
    },
    marquee: {
      display: 'inline-block',
      animation: 'scrollLeftToRight 10s linear infinite',
    },
    '@keyframes scrollLeftToRight': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    },
    header: {
      marginBottom: '1rem',
      fontFamily: '"Poppins", sans-serif',
      fontSize: '3rem',
      fontWeight: '700',
    },
    contentContainer: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    paragraph: {
      fontSize: '1.25rem',
      marginBottom: '1rem',
      lineHeight: '1.8',
      letterSpacing: '0.5px',
      maxWidth: '600px',
    },
    button: {
      backgroundColor: isHovered ? '#ff8c42' : '#ff5722',
      color: '#fff',
      padding: '0.75rem 2.5rem',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      transition: 'all 0.4s ease',
    },
    nav: {
      position: 'absolute',
      top: '50px', // Added margin to push the nav bar lower
      right: '40px',
    },
    navUl: {
      listStyle: 'none',
      display: 'flex',
      gap: '2rem',
    },
    navLi: {
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      padding: '0.5rem 1.5rem',
      borderRadius: '50px',
      backgroundColor: '#00aaff',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    navLinkHover: {
      backgroundColor: '#0077cc',
      color: '#fff',
    },
  };

  return (
    <div style={styles.homepage}>
      {/* Scrolling Alert */}
      <div style={styles.alert}>
        <div style={styles.marquee}>
          🚨 Important: Upcoming assignment submission deadline on October 15th! Please ensure all assignments are submitted on time. 🚨
        </div>
      </div>
      
      <header style={styles.header}>
        <h1>Online Assignment System</h1>
      </header>

      {/* Centered Content Above Button */}
      <div style={styles.contentContainer}>
        <p style={styles.paragraph}>Streamline Your Assignment Workflow</p>
        <p style={styles.paragraph}>Submit, review, and grade assignments with ease.</p>
      </div>

      {/* Get Started Button */}
      <button
        style={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate('/login')} // Navigate to login on click
      >
        Get Started
      </button>

      {/* Navigation */}
      <nav style={styles.nav}>
        <ul style={styles.navUl}>
          <li style={styles.navLi}>
            <Link
              to="/"
              style={styles.navLink}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.navLink.backgroundColor}
            >
              Home
            </Link>
          </li>
          <li style={styles.navLi}>
            <Link
              to="/features"
              style={styles.navLink}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.navLink.backgroundColor}
            >
              Features
            </Link>
          </li>
          <li style={styles.navLi}>
            <Link
              to="/contact"
              style={styles.navLink}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.navLink.backgroundColor}
            >
              Contact
            </Link>
          </li>
          <li style={styles.navLi}>
            <Link
              to="/login"
              style={styles.navLink}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.navLink.backgroundColor}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
