import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Header = styled.h1`
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
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

  &:hover {
    background-color: #e6b800;
    transform: scale(1.05);
  }
`;

const RegisterSuccess = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Change this to your actual login route
  };

  return (
    <Container>
      <Header>Registration Successful!</Header>
      <Message>
        Your credentials have been sent to your email. Please check your inbox.
      </Message>
      <Button onClick={handleLoginRedirect}>Go to Login</Button>
    </Container>
  );
};

export default RegisterSuccess;
