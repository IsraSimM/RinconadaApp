import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const NavBar = () => {
  const context = useContext(ThemeContext);
  const { themes, theme } = context || {
    themes: {
      'dark-neon': {
        bg: 'dark-neon-bg',
        gradient: 'dark-neon-gradient',
        accent: 'dark-neon-accent',
        secondary: 'dark-neon-secondary',
        text: 'dark-neon-text',
      },
    },
    theme: 'dark-neon',
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className={`bg-gradient-to-r from-${themes[theme]?.gradient || 'gray-700'} to-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} p-4 shadow-[0_0_15px_rgba(0,212,255,0.3)] sticky top-0 z-10`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${themes[theme]?.accent || 'blue-500'} to-${themes[theme]?.secondary || 'red-500'}`}>
          RinconadaApp
        </h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,212,255,0.5)] ${
                  isActive ? `bg-${themes[theme]?.accent || 'blue-500'} text-${themes[theme]?.bg || 'gray-800'}` : `hover:bg-${themes[theme]?.accent || 'blue-500'} hover:text-${themes[theme]?.bg || 'gray-800'}`
                }`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ciudadanos"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,212,255,0.5)] ${
                  isActive ? `bg-${themes[theme]?.accent || 'blue-500'} text-${themes[theme]?.bg || 'gray-800'}` : `hover:bg-${themes[theme]?.accent || 'blue-500'} hover:text-${themes[theme]?.bg || 'gray-800'}`
                }`
              }
            >
              Ciudadanos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/participaciones"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,212,255,0.5)] ${
                  isActive ? `bg-${themes[theme]?.accent || 'blue-500'} text-${themes[theme]?.bg || 'gray-800'}` : `hover:bg-${themes[theme]?.accent || 'blue-500'} hover:text-${themes[theme]?.bg || 'gray-800'}`
                }`
              }
            >
              Participaciones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reportes"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,212,255,0.5)] ${
                  isActive ? `bg-${themes[theme]?.accent || 'blue-500'} text-${themes[theme]?.bg || 'gray-800'}` : `hover:bg-${themes[theme]?.accent || 'blue-500'} hover:text-${themes[theme]?.bg || 'gray-800'}`
                }`
              }
            >
              Reportes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,212,255,0.5)] ${
                  isActive ? `bg-${themes[theme]?.accent || 'blue-500'} text-${themes[theme]?.bg || 'gray-800'}` : `hover:bg-${themes[theme]?.accent || 'blue-500'} hover:text-${themes[theme]?.bg || 'gray-800'}`
                }`
              }
            >
              Configuración
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className={`px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,107,107,0.5)] hover:bg-${themes[theme]?.secondary || 'red-500'} hover:text-${themes[theme]?.bg || 'gray-800'}`}
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;