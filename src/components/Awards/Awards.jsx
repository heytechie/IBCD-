import React from 'react';
import { awardsData } from '../../data/content';
import './Awards.css';

const Awards = () => {
  return (
    <section className="awards-section">
      <div className="container">
        <div className="awards-card">
          <div className="awards-content">
            <p className="awards-eyebrow">RECOGNITION</p>
            <h2 className="awards-title">{awardsData.heading}</h2>
            <ul className="awards-list">
              {awardsData.awards.map((award, index) => (
                <li key={award} className={index === 0 ? 'awards-primary' : ''}>
                  {award}
                </li>
              ))}
            </ul>
            <p className="awards-copy">{awardsData.eligibility}</p>
            <p className="awards-copy">{awardsData.invitation}</p>
            <p className="awards-copy">{awardsData.facultyNote}</p>
            <a
              href={awardsData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="awards-button"
            >
              Apply for Awards
            </a>
          </div>
          <div className="awards-qr">
            <img src={awardsData.qr} alt="QR code to apply for awards" />
            <span>Scan to apply for awards</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
