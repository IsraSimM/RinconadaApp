import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import FormField from '../molecules/FormField';
import api from '../../lib/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
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
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/token/', formData);
      localStorage.setItem('token', response.data.access);
      navigate('/ciudadanos');
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError('Credenciales inválidas o error de conexión');
    }
  };

  return (
    <div className={`max-w-md mx-auto mt-10 bg-gradient-to-b from-${themes[theme]?.gradient || 'gray-700'} to-${themes[theme]?.bg || 'gray-800'} p-6 rounded-xl shadow-md animate-fade-in`}>
      <h2 className={`text-2xl font-bold text-${themes[theme]?.text || 'gray-200'} mb-4`}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Usuario"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Ingrese su usuario"
          error={error}
          className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
        />
        <FormField
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
          error={error}
          className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
        />
        {error && <p className={`text-${themes[theme]?.secondary || 'red-500'} text-sm mb-4`}>{error}</p>}
        <button
          type="submit"
          className={`w-full bg-${themes[theme]?.accent || 'blue-500'} text-${themes[theme]?.bg || 'gray-800'} p-2 rounded-md hover:bg-${themes[theme]?.secondary || 'red-500'} hover:shadow-[0_0_15px_rgba(255,107,107,0.5)] transition-all duration-300`}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;