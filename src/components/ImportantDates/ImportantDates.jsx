import React from 'react';
import { FileText, CheckCircle, Tag, CalendarDays } from 'lucide-react';
import { importantDates } from '../../data/content';
import './ImportantDates.css';

const ImportantDates = () => {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'file': return <FileText className="date-icon" />;
      case 'check': return <CheckCircle className="date-icon" />;
      case 'tag': return <Tag className="date-icon" />;
      case 'calendar': return <CalendarDays className="date-icon" />;
      default: return <CalendarDays className="date-icon" />;
    }
  };

  return (
    <section className="important-dates-section">
      <div className="container">
        <h2 className="section-title text-left">Important Dates</h2>
        <div className="grid">
          {importantDates.map((item, index) => (
            <div className="date-card" key={index}>
              <div className="icon-wrapper text-accent">
                {getIcon(item.icon)}
              </div>
              <h4 className="date-title">{item.title}</h4>
              <p className="date-value text-accent">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
