import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      position: 'fixed',
      top: '0',
      width: '100%',
      backgroundColor: '#333',
      padding: '1rem 0',
      display: 'flex',
      justifyContent: 'center',
      zIndex: '1000',
    },
    navUl: {
      listStyle: 'none',
      display: 'flex',
      gap: '2rem',
    },
    navLi: {
      fontWeight: '600',
      fontSize: '1.1rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      padding: '0.5rem 1.5rem',
      borderRadius: '25px',
      backgroundColor: '#00aaff',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    navLinkHover: {
      backgroundColor: '#0077cc',
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.navUl}>
        <li style={styles.navLi}>
          <Link
            to="/"
            style={styles.navLink}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.navLink.backgroundColor)}
          >
            Home
          </Link>
        </li>
        <li style={styles.navLi}>
          <Link
            to="/features"
            style={styles.navLink}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.navLink.backgroundColor)}
          >
            Features
          </Link>
        </li>
        <li style={styles.navLi}>
          <Link
            to="/contact"
            style={styles.navLink}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.navLink.backgroundColor)}
          >
            Contact
          </Link>
        </li>
        <li style={styles.navLi}>
          <Link
            to="/login"
            style={styles.navLink}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.navLink.backgroundColor)}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
