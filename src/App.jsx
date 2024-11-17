import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginFormJsx } from "./components/login-form";
import Home from './components/Home';
import { Animated_404 } from './components/animated-404';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Chequear si hay un token en el montaje inicial del componente
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // Si hay token, usuario está autenticado
    }
  }, []);

  // Manejar autenticación tras login/registro
  const handleAuthentication = (token) => {
    if (token) {
      localStorage.setItem('token', token);
      setIsAuthenticated(true); // Cambia a autenticado
    }
  };

  // Manejar logout y limpiar el token
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false); // Cambia a no autenticado
  };

  return (
    <Router>
      <Routes>
        {/* Redirigir a /home si está autenticado y accede a la ruta raíz */}
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
