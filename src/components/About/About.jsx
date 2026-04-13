import React from 'react';
import './About.css';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const themes = [
    "Data science applications in predictive modeling",
    "Optimization algorithms for business systems",
    "Intelligence decision support driven by AI/ML",
    "Advanced mathematical methods in cryptography",
    "Healthcare analytics & financial engineering cases"
  ];

  return (
    <section id="about" className="about-section bg-alt">
      <div className="container">
        <div className="about-grid d-flex justify-between gap-3">
          <div className="about-content flex-column justify-center" style={{flex: 1}}>
            <h2 className="section-title text-left" style={{marginBottom: '1.5rem'}}>About IBCD 2026</h2>
            <p style={{marginBottom: '1rem'}}>
              IBCD 2026 serves as a global nexus for researchers and practitioners at the intersection of Business Intelligence, Computational Mathematics, and Data Analytics. The conference aims to foster high-level discourse on how rigorous mathematical modeling drives intelligent business decisions in an increasingly data-centric world.
            </p>
            <p>
              By bringing together diverse perspectives from academia and industry, we explore the synthesis of algorithmic innovation and practical applications, ensuring that computational advances translate into robust and sustainable business practices.
            </p>
          </div>
          <div className="about-themes bg-bg" style={{flex: 1}}>
            <h3 className="themes-title text-accent">Conference Themes</h3>
            <ul className="themes-list">
              {themes.map((theme, idx) => (
                <li key={idx} className="d-flex align-center gap-1">
                  <CheckCircle2 size={18} className="text-primary"/>
                  <span>{theme}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
