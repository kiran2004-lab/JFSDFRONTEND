import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Features from './components/Features';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/SignUp';
import RegisterSuccess from './components/RegisterSuccess';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="signup" element={<Signup/>}/>
                <Route path="studentdashboard" element={<StudentDashboard/>}/>
                <Route path="registersuccess" element={<RegisterSuccess/>}/>
                <Route path="facultydashboard" element={<AdminDashboard/>}/>
                

            </Routes>
        </Router>
    );
};

export default App;
