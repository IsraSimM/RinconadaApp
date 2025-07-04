import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import FormField from '../molecules/FormField';
import api from '../../lib/api';

const CiudadanoForm = () => {
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
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    curp: '',
    telefono: '',
    email: '',
    cargo: '',
  });
  const [errors, setErrors] = useState({});

  const cargoOptions = [
    { value: 'dlg', label: 'Presidente' },
    { value: 'cdd', label: 'Ciudadano' },
    { value: 'cmn', label: 'Comunero' },
    { value: 'vsh', label: 'Vishcal' },
    { value: 'tes', label: 'Tesorero' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/ciudadanos/', formData);
      alert('Ciudadano registrado con éxito');
      setFormData({
        nombre: '',
        apellido: '',
        cedula: '',
        curp: '',
        telefono: '',
        email: '',
        cargo: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Ciudadano registration error:', error.response?.data || error.message);
      setErrors(error.response?.data || { general: 'Error al registrar' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-lg mx-auto bg-gradient-to-b from-${themes[theme]?.gradient || 'gray-700'} to-${themes[theme]?.bg || 'gray-800'} p-6 rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.2)] animate-fade-in`}
    >
      <h2 className={`text-2xl font-bold text-${themes[theme]?.text || 'gray-200'} mb-4 bg-clip-text text-transparent bg-gradient-to-r from-${themes[theme]?.accent || 'blue-500'} to-${themes[theme]?.secondary || 'red-500'}`}>
        Registrar Ciudadano
      </h2>
      <FormField
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Ingrese el nombre"
        error={errors.nombre}
        className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
      />
      <FormField
        label="Apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        placeholder="Ingrese el apellido"
        error={errors.apellido}
        className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
      />
      <FormField
        label="Cédula"
        name="cedula"
        value={formData.cedula}
        onChange={handleChange}
        placeholder="Ingrese la cédula (10 dígitos)"
        error={errors.cedula}
        className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
      />
      <FormField
        label="CURP"
        name="curp"
        value={formData.curp}
        onChange={handleChange}
        placeholder="Ingrese el CURP (opcional)"
        error={errors.curp}
        className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
      />
      <FormField
        label="Teléfono"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        placeholder="Ingrese el teléfono (opcional)"
        error={errors.telefono}
        className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ingrese el email (opcional)"
        error={errors.email}
        className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
      />
      <FormField
        label="Cargo"
        type="select"
        name="cargo"
        value={formData.cargo}
        onChange={handleChange}
        options={cargoOptions}
        placeholder="Seleccione un cargo"
        error={errors.cargo}
        className={`bg-${themes[theme]?.bg || 'gray-800'} text-${themes[theme]?.text || 'gray-200'} border-${themes[theme]?.accent || 'blue-500'} focus:ring-${themes[theme]?.accent || 'blue-500'}`}
      />
      {errors.general && <p className={`text-${themes[theme]?.secondary || 'red-500'} text-sm mb-4`}>{errors.general}</p>}
      <button
        type="submit"
        className={`w-full bg-${themes[theme]?.accent || 'blue-500'} text-${themes[theme]?.bg || 'gray-800'} p-2 rounded-md hover:bg-${themes[theme]?.secondary || 'red-500'} hover:shadow-[0_0_15px_rgba(255,107,107,0.5)] transition-all duration-300`}
      >
        Registrar
      </button>
    </form>
  );
};

export default CiudadanoForm;