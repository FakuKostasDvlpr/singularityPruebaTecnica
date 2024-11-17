import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginFormJsx } from "./components/login-form";
import Home from './components/Home';
import { Animated_404 } from './components/animated-404';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  const handleAuthentication = (token) => {
    if (token) {
      localStorage.setItem('token', token);
      setIsAuthenticated(true); 
    }
  };

  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false); 
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/home" /> : <LoginFormJsx onAuth={handleAuthentication} />} 
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Animated_404 />} />
      </Routes>
    </Router>
  );
}

export default App;
