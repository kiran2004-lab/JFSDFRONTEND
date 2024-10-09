import React, { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  const styles = {
    container: {
      textAlign: 'center',
      background: 'linear-gradient(to right, #4facfe, #00f2fe)', // Same gradient background as Home
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: 'white', // White text for contrast
      paddingTop: '4rem',
      position: 'relative', // For background animation
      overflow: 'hidden', // Hide overflow for background
    },
    header: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: '700',
      animation: 'fadeIn 1s ease-in', // Fade-in effect
    },
    paragraph: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      maxWidth: '700px',
      animation: 'fadeIn 1.5s ease-in',
    },
    contentWrapper: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      maxWidth: '1200px',
      margin: '2rem 0',
      animation: 'fadeIn 2s ease-in',
    },
    contactInfo: {
      fontSize: '1.5rem',
      margin: '1rem',
      background: 'rgba(255, 255, 255, 0.1)', // Slightly transparent for contrast
      padding: '1rem',
      borderRadius: '10px',
      width: '40%', // Responsive width for contact info
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow effect
      transition: 'transform 0.3s ease', // Scale effect on hover
    },
    contactLink: {
      textDecoration: 'none',
      color: 'white', // Keep link color white for visibility
      transition: 'color 0.3s ease',
    },
    contactLinkHover: {
      color: '#ffcc00', // Hover effect color
    },
    form: {
      background: 'rgba(255, 255, 255, 0.1)', // Slightly transparent for contrast
      padding: '2rem',
      borderRadius: '10px',
      width: '40%', // Responsive width for form
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s ease', // Scale effect on hover
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      margin: '0.5rem 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      background: 'white', // Brighter input background
      color: 'black',
      transition: 'border 0.3s ease', // Border color change
    },
    button: {
      backgroundColor: '#ffcc00',
      color: '#000',
      padding: '0.75rem 2rem',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease', // Button hover effects
    },
  };

  return (
    <div style={styles.container}>
      <Navbar /> {/* Navbar included at the top */}
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.paragraph}>We'd love to hear from you!</p>
      <div style={styles.contentWrapper}>
        {/* Contact Information */}
        <div
          style={styles.contactInfo}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <p>
            Email: <a href={`mailto:support@assignmentsystem.com`} style={styles.contactLink}>support@assignmentsystem.com</a>
          </p>
          <p>
            Phone: <span style={{ cursor: 'pointer', color: 'white' }}>(123) 456-7890</span>
          </p>
        </div>

        {/* Contact Form */}
        <form
          style={styles.form}
          onSubmit={handleSubmit}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...styles.input, height: '100px' }}
            required
          />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
