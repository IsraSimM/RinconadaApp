// components/RedirectOnAuth.js
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth'; // o donde sea que tengas tu lógica

function RedirectOnAuth() {
  const { isAuthenticated } = useAuth(); // esto depende de tu contexto

  return (
    isAuthenticated
      ? <Navigate to="/home" replace />
      : <Navigate to="/login" replace />
  );
}

export default RedirectOnAuth;
