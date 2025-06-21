import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold text-center p-4">Bienvenido a RinconadaApp</h1>} />
        <Route path="/ciudadanos" element={<div className="p-4">Página de Ciudadanos (en desarrollo)</div>} />
        <Route path="/participaciones" element={<div className="p-4">Página de Participaciones (en desarrollo)</div>} />
        <Route path="/reportes" element={<div className="p-4">Página de Reportes (en desarrollo)</div>} />
      </Routes>
    </div>
  );
}

export default App;