import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'speakers', 'committees'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              setActiveSection(section);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/submit') {
      setActiveSection('submission');
    }
  }, [location.pathname]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'submission' || id === 'registration') {
      navigate('/submit');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Wait a bit for the page to render then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container justify-between align-center">
        <div className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')} style={{ cursor: 'pointer' }}>
          IBCD 2026
        </div>
        
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`navbar-links d-flex align-center gap-2 ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/" className={activeSection === 'home' && location.pathname === '/' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#about" className={activeSection === 'about' && location.pathname === '/' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#speakers" className={activeSection === 'speakers' && location.pathname === '/' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'speakers')}>Speakers</a>
          <a href="/submit" className={location.pathname === '/submit' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'submission')}>Call for Papers</a>
          <a href="#committees" className={activeSection === 'committees' && location.pathname === '/' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'committees')}>Committee</a>
          <button className="btn" onClick={(e) => handleNavClick(e, 'registration')}>Register Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
