import React from 'react';
import CiudadanoForm from '../organisms/CiudadanoForm';

const CiudadanosPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gestión de Ciudadanos</h1>
      <CiudadanoForm />
    </div>
  );
};

export default CiudadanosPage;