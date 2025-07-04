import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import api from '../../lib/api';

const ParticipationsTable = () => {
  const { themes, theme } = useContext(ThemeContext);
  const [participations, setParticipations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipations = async () => {
      try {
        const response = await api.get('/participations/');
        setParticipations(response.data);
      } catch (err) {
        setError('Error al cargar participaciones');
      }
    };
    fetchParticipations();
  }, []);

  if (error) return <p className={`text-${themes[theme].secondary}`}>{error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full bg-${themes[theme].bg} border border-${themes[theme].accent} rounded-lg`}>
        <thead>
          <tr className={`bg-${themes[theme].gradient}`}>
            <th className={`p-2 text-left text-${themes[theme].text}`}>Ciudadano</th>
            <th className={`p-2 text-left text-${themes[theme].text}`}>Evento</th>
            <th className={`p-2 text-left text-${themes[theme].text}`}>Estado</th>
            <th className={`p-2 text-left text-${themes[theme].text}`}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {participations.map((participation) => (
            <tr key={participation.id} className={`border-t border-${themes[theme].accent}`}>
              <td className={`p-2 text-${themes[theme].text}`}>{`${participation.ciudadano.nombre} ${participation.ciudadano.apellido}`}</td>
              <td className={`p-2 text-${themes[theme].text}`}>{participation.fecha.descripcion}</td>
              <td className={`p-2 text-${themes[theme].text}`}>{participation.estado}</td>
              <td className={`p-2 text-${themes[theme].text}`}>{new Date(participation.creado).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipationsTable;