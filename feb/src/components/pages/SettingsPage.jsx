import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import DefaultLayout from '../templates/DefaultLayout';

const SettingsPage = () => {
  const { theme, setTheme, themes } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <DefaultLayout>
      <div className={`max-w-md mx-auto bg-gradient-to-b from-${themes[theme].gradient} to-${themes[theme].bg} p-6 rounded-xl shadow-md animate-fade-in`}>
        <h2 className={`text-2xl font-bold text-${themes[theme].text} mb-4`}>Configuración</h2>
        <div className="mb-4">
          <label className={`block text-${themes[theme].text} font-medium mb-1`}>Seleccionar Tema</label>
          <select
            value={theme}
            onChange={handleThemeChange}
            className={`border border-${themes[theme].accent} rounded-md p-2 w-full bg-${themes[theme].bg} text-${themes[theme].text} focus:outline-none focus:ring-2 focus:ring-${themes[theme].accent}`}
          >
            <option value="dark-neon">Oscuro Neón</option>
            <option value="light-modern">Claro Moderno</option>
            <option value="remedios-classic">Remedios Clásico</option>
          </select>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SettingsPage;