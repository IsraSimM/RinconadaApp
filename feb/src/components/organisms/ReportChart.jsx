import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../lib/api';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/participations/estadisticas/');
        const labels = response.data.map(item => `${item.ciudadano__nombre} ${item.ciudadano__apellido}`);
        const totals = response.data.map(item => item.total);
        setData({
          labels,
          datasets: [
            {
              label: 'Participaciones',
              data: totals,
              backgroundColor: 'rgba(59, 130, 246, 0.5)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Participaciones por Ciudadano</h2>
      <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
    </div>
  );
};

export default ReportChart;