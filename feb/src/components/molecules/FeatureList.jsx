import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ListItem from '../atoms/ListItem';

const FeatureList = () => {
  const { themes, theme } = useContext(ThemeContext);
  const features = [
    'Gestión de usuarios y comunidades',
    'Registro y seguimiento de proyectos',
    'Reportes y estadísticas',
    'Comunicación y soporte',
  ];

  return (
    <ul className="mt-6 space-y-3">
      {features.map((feature, index) => (
        <ListItem
          key={index}
          className={`text-${themes[theme].accent} animate-slide-up delay-${index * 100}`}
        >
          {feature}
        </ListItem>
      ))}
    </ul>
  );
};

export default FeatureList;