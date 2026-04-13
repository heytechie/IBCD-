import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ImportantDates from './components/ImportantDates/ImportantDates';
import About from './components/About/About';
import Objectives from './components/Objectives/Objectives';
import Speakers from './components/Speakers/Speakers';
import Registration from './components/Registration/Registration';
import Submission from './components/Submission/Submission';
import Committees from './components/Committees/Committees';
import CampusAndCity from './components/CampusAndCity/CampusAndCity';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImportantDates />
      <About />
      <Objectives />
      <Speakers />
      <Registration />
      <Submission />
      <Committees />
      <CampusAndCity />
      <Footer />
    </>
  );
}

export default App;
