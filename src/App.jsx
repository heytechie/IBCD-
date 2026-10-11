import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import SubmissionPage from './pages/SubmissionPage';
import AccommodationPage from './pages/AccommodationPage';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<SubmissionPage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
