import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Send } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('October 15, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section bg-alt d-flex align-center">
      <div className="container hero-container align-center">
        <div className="hero-content">
          <h1 className="hero-title">
            International Conference<br />
            on Business Intelligence,<br />
            Computational<br />
            Mathematics and Data<br />
            Analytics <span className="text-accent">(IBCD 2026)</span>
          </h1>
          
          <div className="hero-meta d-flex gap-2">
            <span className="d-flex align-center gap-1"><Calendar size={20} /> 15th-16th October 2026</span>
            <span className="d-flex align-center gap-1"><MapPin size={20} /> VIT Bhopal University, MP, India</span>
          </div>

          <div className="hero-mode">
            Hybrid — Offline for all sessions; Online only for International Participants
          </div>

          <div className="hero-actions d-flex gap-1">
            <button className="btn d-flex align-center gap-1">
              Submit Abstract <Send size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}>
              Register Now
            </button>
          </div>
        </div>

        <div className="hero-countdown text-center">
          <h4 className="countdown-title text-accent">COUNTDOWN TO IBCD 2026</h4>
          <div className="d-flex gap-2 justify-center">
            <div className="time-block">
              <span className="time-val">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="time-label">DAYS</span>
            </div>
            <div className="time-block">
              <span className="time-val">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">HOURS</span>
            </div>
            <div className="time-block">
              <span className="time-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">MINS</span>
            </div>
            <div className="time-block">
              <span className="time-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">SECS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
