import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styled from 'styled-components';

// Styled components for the layout
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const VideoContainer = styled.div`
  flex: 1; /* Take equal space on both sides */
  position: relative;
  overflow: hidden;
  margin: 0 1rem; /* Space between videos and form */
`;

const BackgroundVideo = styled.video`
  position: absolute; /* Position absolute for the video */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the container while preserving aspect ratio */
  z-index: -1; /* Place video behind other elements */
`;

const FormContainer = styled.div`
  flex: 1; /* Take equal space on the right */
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Signup = () => {
    const navigate = useNavigate(); // Create navigate instance for navigation
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        fullName: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Perform signup logic (e.g., API call)
            console.log('Signup successful:', formData);
            // Redirect to login page after successful signup
            navigate('/login'); // Change this route to your actual login route
            // Clear the form if needed
            setFormData({
                username: '',
                password: '',
                email: '',
                fullName: '',
                confirmPassword: '',
            });
            setErrors({});
        }
    };

    return (
        <Container>
            <VideoContainer>
                <BackgroundVideo
                    autoPlay
                    loop
                    muted
                    src="https://videos.pexels.com/video-files/5536119/5536119-sd_360_640_25fps.mp4" // Replace with the actual video URL for the left video
                    type="video/mp4"
                />
            </VideoContainer>
            <FormContainer>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                    <Input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}

                    <Button type="submit">Submit</Button>
                </form>
            </FormContainer>
            <VideoContainer>
                <BackgroundVideo
                    autoPlay
                    loop
                    muted
                    src="https://videos.pexels.com/video-files/5676079/5676079-hd_1920_1080_25fps.mp4" // Replace with the actual video URL for the right video
                    type="video/mp4"
                />
            </VideoContainer>
        </Container>
    );
};

export default Signup;
