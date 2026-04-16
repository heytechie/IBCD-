import React from 'react';
import { committees, textCommittees } from '../../data/content';
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

  const renderTextCommitteeCategory = (title, members, fullWidth = false) => {
    if (!members || members.length === 0) return null;
    return (
      <div className={`text-committee-category ${fullWidth ? 'full-width' : ''}`}>
        <h3 className="text-committee-title">{title}</h3>
        <ul className={`text-committee-list ${fullWidth ? 'columns-2' : ''}`}>
          {members.map((member, idx) => (
            <li key={idx} className="text-committee-item">{member}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="committees" className="committees-section">
      <div className="container">
        <h2 className="section-title">Committees</h2>

        <div className="committee-content flex-column gap-3" style={{ gap: '4rem' }}>
          {renderCommitteeCategory("General Chairs", committees.generalChairs,)}
          {renderCommitteeCategory("Conference Chair", committees.conferenceChair,)}
          {renderCommitteeCategory("Organizing Secretaries", committees.organizingSecretaries,)}
          {renderCommitteeCategory("Conveners", committees.conveners,)}
          {renderCommitteeCategory("Co-Conveners", committees.coconveners,)}
        </div>

        <div className="text-committees-grid" style={{ marginTop: '4rem' }}>
          {renderTextCommitteeCategory("Organising Committee", textCommittees.organisingCommittee)}
          {renderTextCommitteeCategory("Technical Committee", textCommittees.technicalCommittee)}
          {renderTextCommitteeCategory("Technical Review Committee", textCommittees.technicalReviewCommittee)}
          {renderTextCommitteeCategory("Speakers", textCommittees.speakers)}
          {renderTextCommitteeCategory("International Advisory Committee", textCommittees.internationalAdvisoryCommittee, true)}
          {renderTextCommitteeCategory("National Advisory Committee", textCommittees.nationalAdvisoryCommittee, true)}
        </div>
      </div>
    </section>
  );
};

export default Committees;
