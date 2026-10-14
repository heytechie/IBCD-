import React from 'react';
import { Calendar, Clock, MapPin, Award, User, Sparkles } from 'lucide-react';
import './InauguralSchedulePage.css';

const scheduleEntries = [
  {
    id: 1,
    time: '09:30 - 09:35',
    program: 'Lighting of Lamp & Prayer',
    responsiblePerson: '',
    isHighlight: false
  },
  {
    id: 2,
    time: '09:35 - 09:40',
    program: 'Welcome Address',
    responsiblePerson: 'Organizing Secretary, IBCD 2026: Dr.Akshara Makrariya',
    isHighlight: false
  },
  {
    id: 3,
    time: '09:40 - 09:45',
    program: 'About the Conference IBCD 2026',
    responsiblePerson: 'Convener, IBCD 2026: Dr. Bhakti Parashar',
    isHighlight: false
  },
  {
    id: 4,
    time: '09:45 - 09:50',
    program: 'Felicitation Address',
    responsiblePerson: 'Pro- Vice Chancellor, VIT Bhopal University',
    isHighlight: false
  },
  {
    id: 5,
    time: '09:50 - 09:55',
    program: 'Felicitation of the Chief Guest and Guest of Honour',
    responsiblePerson: 'By Vice-Chancellor and Pro-Vice Chancellor',
    isHighlight: false
  },
  {
    id: 6,
    time: '09:55 - 10:05',
    program: 'Presidential Address',
    responsiblePerson: 'Vice Chancellor, VIT Bhopal University',
    isHighlight: false
  },
  {
    id: 7,
    time: '10:05 - 10:07',
    program: 'Introduction of the Guest of Honour',
    responsiblePerson: 'Organizing Secretary, IBCD 2026: Dr. Juhi Kesarwani',
    isHighlight: false
  },
  {
    id: 8,
    time: '10:07 - 10:17',
    program: 'Address by the Guest of Honour',
    responsiblePerson: 'Prof. Neetesh Purohit, Director, Shri G.S. Institute of Technology and Science, Indore',
    isHighlight: true
  },
  {
    id: 9,
    time: '10:17 - 10:19',
    program: 'Introduction of the Chief Guest',
    responsiblePerson: 'Conference Chair, IBCD 2026: Dr. Zaheer Kareem Ansari',
    isHighlight: false
  },
  {
    id: 10,
    time: '10:19 - 10:35',
    program: 'Address by the Chief Guest',
    responsiblePerson: 'Mr.Raj Shekhar Singh, Director(Technology) MoD( R&D), DRDO',
    isHighlight: true
  },
  {
    id: 11,
    time: '10:35 - 10:40',
    program: 'Vote of Thanks',
    responsiblePerson: 'Convener, IBCD 2026: Dr. Anant Kant Shukla',
    isHighlight: false
  }
];

const InauguralSchedulePage = () => {
  return (
    <div className="inaugural-page-wrapper">
      {/* Hero Section */}
      <header className="inaugural-hero">
        <div className="inaugural-container">
          <nav aria-label="Breadcrumb" className="inaugural-breadcrumbs">
            <a href="/">Home</a>
            <span className="inaugural-breadcrumb-sep">&gt;</span>
            <span className="inaugural-breadcrumb-current">Inaugural Schedule</span>
          </nav>

          <p className="inaugural-pre-title">International Conference On</p>
          <h1 className="inaugural-main-title">
            Business Intelligence, Computational Mathematics and Data Analytics (IBCD 2026)
          </h1>

          <p className="inaugural-organizer">
            Organized by <strong>VIT Bhopal University</strong>
          </p>

          <div className="inaugural-meta-pills">
            <div className="meta-pill">
              <Calendar size={17} className="meta-pill-icon" />
              <span><strong>Dates:</strong> 15th - 16th October 2026</span>
            </div>
            <div className="meta-pill">
              <Clock size={17} className="meta-pill-icon" />
              <span><strong>Session Time:</strong> 09:30 AM – 10:40 AM</span>
            </div>
            <div className="meta-pill">
              <MapPin size={17} className="meta-pill-icon" />
              <span><strong>Venue:</strong> Auditorium-1, Academic Block-1, VIT Bhopal University</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="inaugural-main-section">
        <div className="inaugural-container">

          {/* Dignitaries Spotlight */}
          <div className="inaugural-dignitaries-section" aria-labelledby="dignitaries-heading">
            <h2 id="dignitaries-heading" className="visually-hidden">Dignitaries Spotlight</h2>
            <div className="dignitaries-grid">
              {/* Chief Guest Card */}
              <div className="dignitary-card dignitary-chief">
                <div className="dignitary-badge">
                  <Award size={15} />
                  <span>Chief Guest</span>
                </div>
                <h3 className="dignitary-name">Mr. Raj Shekhar Singh</h3>
                <p className="dignitary-role">
                  Director (Technology), DRDO, Govt. of India
                </p>
                <div className="dignitary-details-tag">
                  MoD (R&amp;D), DRDO
                </div>
              </div>

              {/* Guest of Honour Card */}
              <div className="dignitary-card dignitary-honour">
                <div className="dignitary-badge">
                  <User size={15} />
                  <span>Guest of Honour</span>
                </div>
                <h3 className="dignitary-name">Prof. Neetesh Purohit</h3>
                <p className="dignitary-role">
                  Director, Shri G.S. Institute of Technology and Science, Indore
                </p>
                <div className="dignitary-details-tag">
                  SGSITS Indore
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="inaugural-schedule-section" aria-labelledby="schedule-heading">
            <div className="schedule-header-card">
              <div className="schedule-header-top">
                <span className="tentative-tag">Tentative Program Schedule</span>
                <span className="schedule-day-badge">Day 1</span>
              </div>
              <h2 id="schedule-heading" className="schedule-section-title">
                Day 1: 15th October, 2026 (Thursday)
              </h2>
              <div className="schedule-session-subtitle">
                <span className="session-name">Inaugural Session</span>
                <span className="session-time-pill">
                  <Clock size={15} /> 09:30 AM– 10:40 AM
                </span>
              </div>
              <div className="schedule-venue-bar">
                <MapPin size={16} className="venue-icon" />
                <span><strong>Venue:</strong> Auditorium-1, Academic Block-1, VIT Bhopal University</span>
              </div>
            </div>

            {/* Semantic Responsive Schedule Table */}
            <div className="schedule-table-wrapper">
              <table className="inaugural-table">
                <caption className="visually-hidden">
                  Inaugural Session Program Schedule for Day 1 (15th October 2026)
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="col-time">Time</th>
                    <th scope="col" className="col-program">Program</th>
                    <th scope="col" className="col-person">Speaker / Responsible Person</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleEntries.map((item) => (
                    <tr
                      key={item.id}
                      className={`schedule-row ${item.isHighlight ? 'row-highlighted' : ''}`}
                    >
                      <td className="cell-time" data-label="Time">
                        <span className="time-pill">
                          <Clock size={13} className="time-pill-icon" />
                          {item.time}
                        </span>
                      </td>
                      <td className="cell-program" data-label="Program">
                        <span className="program-title">{item.program}</span>
                      </td>
                      <td className="cell-person" data-label="Speaker / Responsible Person">
                        {item.responsiblePerson ? (
                          <span className="person-text">{item.responsiblePerson}</span>
                        ) : (
                          <span className="person-none" aria-label="Not specified">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Schedule Notice Footer */}
            <div className="schedule-notice-box">
              <p>
                <strong>Please Note:</strong> This is a tentative schedule for the inaugural session of IBCD 2026 as outlined by the organizing committee. Attendees and delegates are requested to be seated in Auditorium-1 by 09:15 AM.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default InauguralSchedulePage;
