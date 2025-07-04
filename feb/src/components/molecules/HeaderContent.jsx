import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Image from '../atoms/Image';
import Heading from '../atoms/Heading';

const HeaderContent = () => {
  const { themes, theme } = useContext(ThemeContext);

  return (
    <div className="text-center mb-8 animate-slide-up">
      <Image
        src="/assets/emblema-remedios.svg"
        alt="Escudo de Remedios"
        className="w-32 mx-auto mb-4 animate-pulse-glow"
      />
      <Heading level={1} className={`bg-clip-text text-transparent bg-gradient-to-r from-${themes[theme].accent} to-${themes[theme].secondary}`}>
        Bienvenido al Sistema de Gestión Comunitaria
      </Heading>
      <Heading level={2} className={`text-${themes[theme].text} mt-2`}>
        Municipio de Remedios
      </Heading>
    </div>
  );
};

export default HeaderContent;