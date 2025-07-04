import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import HeaderContent from '../molecules/HeaderContent';
import FeatureList from '../molecules/FeatureList';
import Paragraph from '../atoms/Paragraph';

const WelcomeSection = () => {
  const { themes, theme } = useContext(ThemeContext);

  return (
    <div className={`max-w-3xl mx-auto bg-gradient-to-b from-${themes[theme].gradient} to-${themes[theme].bg} p-8 rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.2)] animate-fade-in`}>
      <HeaderContent />
      <Paragraph className="text-center">
        Este sistema está diseñado para facilitar la gestión y administración de los procesos comunitarios en Remedios.
        Aquí podrá acceder a módulos de información, reportes, y herramientas para fortalecer la participación ciudadana y la transparencia.
      </Paragraph>
      <FeatureList />
      <Paragraph className="mt-8 text-center">
        Por favor, seleccione una opción del menú para comenzar.
      </Paragraph>
    </div>
  );
};

export default WelcomeSection;