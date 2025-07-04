import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import MainPage from './components/pages/MainPage';
import CiudadanosPage from './components/pages/CiudadanosPage';
import ParticipacionesPage from './components/pages/ParticipationsPage';
import LoginPage from './components/pages/LoginPage';
import SettingsPage from './components/pages/SettingsPage';
import RedirectOnAuth from './components/RedirectOnAuth';

function App() {
  return (
    <Routes>
      {/* Redirección inteligente en la raíz */}
      <Route path="/" element={<RedirectOnAuth />} />

      <Route path="/login" element={<LoginPage />} />
      
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<MainPage />} />
        <Route path="/ciudadanos" element={<CiudadanosPage />} />
        <Route path="/participaciones" element={<ParticipacionesPage />} />
        <Route path="/reportes" element={<div className="p-4 text-light-modern-text">Página de Reportes (en desarrollo)</div>} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
