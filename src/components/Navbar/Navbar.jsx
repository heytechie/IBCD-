import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'submission', 'speakers', 'committees', 'registration'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setMobileMenuOpen(false);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container justify-between align-center">
        <div className="navbar-logo" onClick={() => scrollTo('home')}>
          IBCD 2026
        </div>
        
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`navbar-links d-flex align-center gap-2 ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
          <a href="#speakers" className={activeSection === 'speakers' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('speakers'); }}>Speakers</a>
          <a href="#submission" className={activeSection === 'submission' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('submission'); }}>Call for Papers</a>
          <a href="#committees" className={activeSection === 'committees' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('committees'); }}>Committee</a>
          <button className="btn" onClick={() => scrollTo('registration')}>Register Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
