import React from 'react';
import ParticipationsTable from '../organisms/ParticipationsTable';

const ParticipacionesPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gestión de Participaciones</h1>
      <ParticipationsTable />
    </div>
  );
};

export default ParticipacionesPage;