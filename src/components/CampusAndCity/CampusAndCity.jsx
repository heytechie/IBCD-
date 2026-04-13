import React from 'react';
import './CampusAndCity.css';

const CampusAndCity = () => {
  return (
    <section className="campus-city-section bg-alt" style={{paddingBottom: '8rem'}}>
      <div className="container">
        <div className="grid">
          <div className="cc-card">
            <div className="cc-image">
              <img src="/VitBhopal.jpg" alt="VIT Bhopal Campus" />
              <div className="cc-image-label bg-primary">VIT Bhopal University</div>
            </div>
            <div className="cc-content">
              <p>
                VIT Bhopal, established the prestigious academic institution in central India, focuses on its advanced infrastructure and research-led education. As an IBCD 2026 destination locally, the university provides an unparalleled academic experience focused on emerging tech like AI and Cyber Security.
              </p>
            </div>
          </div>

          <div className="cc-card">
            <div className="cc-image">
              <img src="/BhopalCityOfLakes.webp" alt="Bhopal City of Lakes" />
              <div className="cc-image-label bg-accent">Bhopal: The City of Lakes</div>
            </div>
            <div className="cc-content">
              <p>
                Bhopal, the capital of Madhya Pradesh, is a historic city uniquely positioned amidst natural heritage. Known as the City of Lakes, it offers visitors a deep combination of historical monuments and modern technological hubs, making it an ideal destination for the intellectual discourse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusAndCity;
