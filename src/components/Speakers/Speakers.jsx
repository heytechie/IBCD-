import React from 'react';
import { speakers } from '../../data/content';
import './Speakers.css';

const Speakers = () => {
  return (
    <section id="speakers" className="bg-primary text-center speakers-section">
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>Distinguished Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((speaker, idx) => (
            <div className="speaker-card" key={idx}>
              <div className="speaker-image">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <h5 className="speaker-name">{speaker.name}</h5>
              <p className="speaker-aff">{speaker.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
