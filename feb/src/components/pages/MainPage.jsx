import React from 'react';
import DefaultLayout from '../templates/DefaultLayout';
import WelcomeSection from '../organisms/WelcomeSection';

const MainPage = () => {
  return (
    <DefaultLayout>
      <WelcomeSection />
    </DefaultLayout>
  );
};

export default MainPage;