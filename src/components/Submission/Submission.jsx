import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import './Submission.css';

const Submission = () => {
  const [activeTab, setActiveTab] = useState('abstract');

  return (
    <section id="submission" className="submission-section bg-alt">
      <div className="container">
        <h2 className="section-title text-left">Submission Guidelines</h2>
        
        <div className="tabs-container">
          <div className="tabs-header d-flex">
            <button 
              className={`tab-btn ${activeTab === 'abstract' ? 'active' : ''}`}
              onClick={() => setActiveTab('abstract')}
            >
              Abstract Submission
            </button>
            <button 
              className={`tab-btn ${activeTab === 'full' ? 'active' : ''}`}
              onClick={() => setActiveTab('full')}
            >
              Full Paper Guidelines
            </button>
          </div>
          
          <div className="tab-content bg-bg">
            <div className="d-flex justify-between gap-3">
              <div style={{flex: 1}}>
                <h4 className="content-title">Formatting Requirements</h4>
                <ul className="guideline-list">
                  <li>Maximum word count: {activeTab === 'abstract' ? '300 words' : '6,000 words'}</li>
                  <li>Font: Times New Roman, 12pt</li>
                  <li>Format: Standard IEEE Conference Proceedings</li>
                  <li>File Type: PDF and Source (.doc, .docx)</li>
                </ul>
              </div>
              <div style={{flex: 1}}>
                <h4 className="content-title">Key Submission Info</h4>
                <p className="submission-info-text">
                  All accepted and presented papers will be considered for publication in the Springer Conference Proceedings (Scopus Indexed).
                </p>
                <div className="info-alert d-flex align-center gap-1">
                  <AlertCircle size={20} className="text-accent" />
                  <span>Double-blind review process will be strictly enforced.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="publication-partner bg-primary d-flex align-center justify-between">
          <div className="partner-info d-flex align-center gap-2">
            <div className="partner-logo">
              {/* Springer logo placeholder / abstract shape */}
              <div className="logo-placeholder"></div>
            </div>
            <div>
              <h4 style={{color: 'white', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontSize: '1.1rem'}}>Publication Partner</h4>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem'}}>Proceedings will be published in Springer Nature.</p>
            </div>
          </div>
          <button className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white'}}>Read Proceedings Norms</button>
        </div>
      </div>
    </section>
  );
};

export default Submission;
