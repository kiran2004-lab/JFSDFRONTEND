import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container with fade-in effect
const Container = styled.div`
  position: relative; /* Relative positioning for the container */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  animation: ${fadeIn} 0.5s ease-in-out;
  padding: 2rem;
  overflow: hidden; /* Prevent overflow for video */
`;

// Video styled component
const BackgroundVideo = styled.video`
  position: absolute; /* Absolute positioning to cover the background */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the container while preserving aspect ratio */
  z-index: -1; /* Place video behind other elements */
`;

// Styled components for the rest of the page
const Header = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  padding: 2rem; /* Padding for the container */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Shadow for depth */
  backdrop-filter: blur(10px); /* Blur effect for background */
  margin-bottom: 2rem; /* Space below the container */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Ensures full width inside FormContainer */
`;

const Input = styled.input`
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: none;
  width: 300px;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.5);
  }
`;

const Button = styled.button`
  background-color: #ffcc00;
  color: #000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;

  &:hover {
    background-color: #e6b800;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const RememberMeContainer = styled.label`
  display: flex;
  align-items: center;
  color: white;
  margin: 1rem 0;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  color: #ffcc00;
  text-align: left;
`;

const BenefitItem = styled.li`
  margin: 0.5rem 0;
`;

const SignupLink = styled.p`
  margin-top: 1rem;
  color: #ffcc00;

  a {
    color: #ffcc00;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fakeLogin(username, password); // Replace with your actual login logic
      if (response.error) {
        throw new Error(response.error);
      }
      console.log('Logged in successfully:', response);
      // Redirect or perform further actions here
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fakeLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'user' && password === 'pass') {
          resolve({ success: true });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  return (
    <Container>
      <BackgroundVideo
        autoPlay
        loop
        muted
        src="https://videos.pexels.com/video-files/9032181/9032181-uhd_1440_2560_25fps.mp4" // Replace with the actual video URL
        type="video/mp4"
      />
      <Header>Welcome Back!</Header>
      <Paragraph>Please enter your credentials.</Paragraph>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {/* Wrap the inputs in FormContainer */}
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RememberMeContainer>
            <Checkbox
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </RememberMeContainer>
          <Button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Form>
        
        <SignupLink>
          Don't have an account? <a href="/signup">Sign up here</a>
        </SignupLink>
        <SignupLink>
          <a href="/forgot-password" style={{ color: '#ffcc00' }}>
            Forgot Password?
          </a>
        </SignupLink>
      </FormContainer>

      <BenefitsList>
        <BenefitItem>✔️ Quick and easy access to assignments.</BenefitItem>
        <BenefitItem>✔️ Stay updated on submission deadlines.</BenefitItem>
        <BenefitItem>✔️ Receive timely feedback from instructors.</BenefitItem>
      </BenefitsList>
    </Container>
  );
};

export default Login;
