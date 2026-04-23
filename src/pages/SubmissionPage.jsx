import React from 'react';
import { BookOpen, FileText, Info } from 'lucide-react';
import { importantDates, feesData, paymentDetails } from '../data/content';
import './SubmissionPage.css';

const SubmissionPage = () => {
  return (
    <div className="sub-page-wrapper">
      <header className="sub-page-header">
        <div className="sub-page-container">
          <div className="sub-breadcrumbs">
            Home &gt; <span>Submissions & Registration</span>
          </div>
          <h1 className="sub-title">Submissions & Registration</h1>
          <div style={{ maxWidth: '900px', fontSize: '0.95rem', color: '#fff', 'margin-top': '10px' }}>
            <strong>CMT ACKNOWLEDGMENT:</strong> The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.

          </div>
        </div>
      </header>

      {/* Deadlines Section */}
      <section className="sub-section sub-page-container">
        <div className="sub-section-subtitle">TIMELINE</div>
        <h2 className="sub-section-title">Important Deadlines</h2>
        <div className="timeline-grid">
          {importantDates.map((item, idx) => {
            if (idx == 3) {
              return;
            }
            const isLast = idx === importantDates.length - 1;
            // Split date if needed
            const dateParts = item.date.split(' ');
            const day = dateParts[0] || item.date;
            const month = dateParts.slice(1).join(' ') || '';

            return (
              <div key={idx} className={`timeline-card ${isLast ? 'dark' : ''}`}>
                <div className="timeline-phase">PHASE 0{idx + 1}</div>
                <div className="timeline-card-title">{item.title}</div>
                <div className="timeline-date">
                  {day} <span style={{ fontSize: '1rem', fontWeight: '600' }}>{month}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="sub-section sub-page-container">
        <div className="guidelines-layout">
          <div className="guidelines-text">
            <h2 className="sub-section-title">Submission Guidelines</h2>
            <p>
              Authors are invited to submit original, unpublished research for peer review and
              inclusion in the conference proceedings. All accepted and presented papers will
              be considered for publication.
            </p>
          </div>
          <div className="guideline-cards">
            {/* Abstract Card */}
            <div className="g-card">
              <div className="g-icon-wrapper">
                <FileText size={20} />
              </div>
              <div className="g-card-content">
                <h3 className="g-card-title">Abstract Submission</h3>
                <div className="g-abstract-grid">
                  <div className="g-meta-item">
                    <span className="g-meta-label">Word Count</span>
                    <span className="g-meta-value">250 - 300 words</span>
                  </div>
                  <div className="g-meta-item">
                    <span className="g-meta-label">Typography</span>
                    <span className="g-meta-value">Times New Roman</span>
                  </div>
                  <div className="g-meta-item">
                    <span className="g-meta-label">Format</span>
                    <span className="g-meta-value">Springer LNCS</span>
                  </div>
                  <div className="g-meta-item">
                    <span className="g-meta-label">File Type</span>
                    <span className="g-meta-value">PDF / LaTeX / Word</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Paper Card */}
            <div className="g-card">
              <div className="g-icon-wrapper">
                <BookOpen size={20} />
              </div>
              <div className="g-card-content">
                <h3 className="g-card-title">Full Paper Guidelines</h3>
                <p className="g-card-desc">
                  Accepted abstracts will be invited for full paper submission. All submissions
                  undergo a double-blind peer review process by the international committee.
                  Plagiarism must be strictly below 10%.
                </p>
                <div className="g-fp-panels">
                  <div className="fp-panel">
                    <h5>Formatting Requirements</h5>
                    <p>Word count: Max 6,000 words<br />Font: 12pt Times New Roman</p>
                  </div>
                  <div className="fp-panel">
                    <h5>Publication Info</h5>
                    <p>Accepted papers will be published in the Springer Conference Proceedings (Scopus Indexed).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Fee Structure Section */}
      <section className="sub-section sub-page-container">
        <h2 className="sub-section-title" style={{ textAlign: 'center' }}>Registration Fee Structure</h2>
        <div className="sub-table-wrapper">
          <table className="sub-table">
            <thead>
              <tr>
                <th>Participant Category</th>
                <th>Early Bird (Before Sept 10)</th>
                <th>Regular (After Sept 10)</th>
              </tr>
            </thead>
            <tbody>
              {feesData.national.map((fee, idx) => (
                <tr key={`nat-${idx}`}>
                  <td>{fee.category} (National)</td>
                  <td className="qty">{fee.earlyBird}</td>
                  <td className="qty">{fee.afterDue}</td>
                </tr>
              ))}
              {feesData.international.map((fee, idx) => (
                <tr key={`int-${idx}`}>
                  <td>{fee.category} (International)</td>
                  <td className="qty">{fee.earlyBird}</td>
                  <td className="qty">{fee.afterDue || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Layout Sections */}
      <section className="sub-section sub-page-container" style={{ paddingTop: '0' }}>
        <div className="bottom-split">
          <div className="bank-card">
            <h3>Bank Transfer Details</h3>
            <div className="bank-row">
              <span className="bank-label">Account Name</span>
              <span className="bank-val">IBCD 2026 Secretariat</span>
            </div>
            <div className="bank-row">
              <span className="bank-label">Bank Name</span>
              <span className="bank-val">{paymentDetails.bankName}</span>
            </div>
            <div className="bank-row">
              <span className="bank-label">A/C Number</span>
              <span className="bank-val">{paymentDetails.accountNo}</span>
            </div>
            <div className="bank-row">
              <span className="bank-label">IFSC / SWIFT</span>
              <span className="bank-val">{paymentDetails.ifsc} / {paymentDetails.swift}</span>
            </div>
            <span><strong>Note :-</strong> Kindly fill the form in registration link on the right and enter the transaction id there.</span>
          </div>

          <div className="portal-card">
            <h3>Registration Portal</h3>
            <p>
              Complete your payment first and keep the transaction ID / Receipt ready for the online
              registration form. All abstract and full paper submissions are handled via Microsoft CMT.
            </p>
            <div className="registration-btns">
              <a
                href="https://forms.gle/4ZWUaQkTL56CXHek6"
                target="_blank"
                rel="noopener noreferrer"
                className="portal-btn"
              >
                Register here →
              </a>

              <a
                href="https://cmt3.research.microsoft.com/IBCD2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="portal-btn"
              >
                Submission portal →
              </a>
            </div>
            <div className="portal-note">
              <Info size={16} />
              Registration fee includes access to all technical sessions, conference kit,
              proceedings (Digital), lunches, and tea/coffee.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmissionPage;
