import React from 'react';
import { committees } from '../../data/content';
import './Committees.css';

const Committees = () => {
  const renderCommitteeCategory = (title, members, icon) => {
    if (!members || members.length === 0) return null;
    return (
      <div className="committee-category">
        <div className="inline-heading-wrapper d-flex align-center justify-center">
          <div className="heading-line"></div>
          <div className="inline-heading-badge d-flex align-center gap-1">
            {icon && <span className="heading-icon">{icon}</span>}
            <span className="heading-text">{title}</span>
          </div>
          <div className="heading-line"></div>
        </div>
        <div className="committee-flex-grid" style={{ marginTop: '2rem' }}>
          {members.map((member, idx) => (
            <div className="committee-photo-card" key={idx}>
              <div className="committee-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="committee-info">
                <h5 className="committee-name">{member.name}</h5>
                {member.affiliation && <p className="committee-aff">{member.affiliation}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="committees" className="committees-section">
      <div className="container">
        <h2 className="section-title">Organizing Committees</h2>

        <div className="committee-content flex-column gap-3" style={{ gap: '4rem' }}>
          {renderCommitteeCategory("General Chairs", committees.generalChairs,)}
          {renderCommitteeCategory("Conference Chair", committees.conferenceChair,)}
          {renderCommitteeCategory("Organizing Secretaries", committees.organizingSecretaries,)}
          {renderCommitteeCategory("Conveners", committees.conveners,)}
          {renderCommitteeCategory("Co-Conveners", committees.coconveners,)}
        </div>
      </div>
    </section>
  );
};

export default Committees;
