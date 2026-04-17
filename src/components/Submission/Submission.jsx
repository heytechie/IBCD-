import React, { useState } from 'react';
import { BookOpen, AlertTriangle, List } from 'lucide-react';
import './Submission.css';

const Submission = () => {
  const [activeTab, setActiveTab] = useState('abstract');

  return (
    <section id="submission" className="submission-section bg-alt">
      <div className="container">
        <h2 className="section-title text-left submission-title">Submission Guidelines</h2>

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
            <div className="content-inner">
              <h4 className="content-title d-flex align-center gap-1">
                <List size={20} className="text-accent" /> Formatting Requirements
              </h4>
              <div className="req-grid">
                <div className="req-item">
                  <span className="bullet">•</span> Maximum word count: {activeTab === 'abstract' ? '300 words' : '6,000 words'}
                </div>
                <div className="req-item">
                  <span className="bullet">•</span> Font: Times New Roman, 12pt
                </div>
                <div className="req-item">
                  <span className="bullet">•</span> Format: Springer LNCS Conference Proceedings
                </div>
                <div className="req-item">
                  <span className="bullet">•</span> File Type: PDF and Source (LaTeX/Word)
                </div>
              </div>

              <h4 className="content-title d-flex align-center gap-1">
                <BookOpen size={20} className="text-accent" /> Key Submission Info
              </h4>
              <p className="submission-info-text">
                All accepted and presented papers will be considered for publication in the <strong>Springer Conference Proceedings (Scopus Indexed)</strong>. This ensures maximum visibility and academic impact for your research work.
              </p>

              <div className="ethical-alert d-flex align-center gap-1">
                <div className="alert-icon-container">
                  <AlertTriangle size={24} className="text-accent" />
                </div>
                <div>
                  <div className="alert-heading">ETHICAL GUIDELINE</div>
                  <div className="alert-desc">Plagiarism limit: Strictly below 10% (excluding references). Submissions exceeding this limit will be automatically rejected.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px', border: '1px solid #e9ecef', fontSize: '0.95rem', color: '#495057' }}>
          <strong>CMT ACKNOWLEDGMENT:</strong> The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        </div>
      </div>
    </section>
  );
};

export default Submission;
