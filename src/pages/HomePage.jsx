import React from 'react';
import Hero from '../components/Hero/Hero';
import ImportantDates from '../components/ImportantDates/ImportantDates';
import About from '../components/About/About';
import Objectives from '../components/Objectives/Objectives';
import Speakers from '../components/Speakers/Speakers';
import Committees from '../components/Committees/Committees';
import CampusAndCity from '../components/CampusAndCity/CampusAndCity';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ImportantDates />
      <About />
      <Objectives />
      <Speakers />
      <Committees />
      <CampusAndCity />
    </>
  );
};

export default HomePage;
