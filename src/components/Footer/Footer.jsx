import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section bg-primary text-white">
            <div className="container">
                <div className="grid footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-brand">IBCD 2026</h3>
                        <p className="footer-desc">
                            International Conference on Business Intelligence, Computational Mathematics and Data Analytics.
                            Organized by VIT Bhopal University.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="contact-list d-flex flex-column gap-1">
                            <div className="d-flex align-center gap-1">
                                <Mail size={16} className="text-accent" />
                                <span>conference@vitbhopal.ac.in</span>
                            </div>
                            <div className="d-flex align-center gap-1">
                                <Phone size={16} className="text-accent" />
                                <span>+91 7560 254 500</span>
                            </div>
                            <div className="d-flex align-center gap-1" style={{ alignItems: 'flex-start' }}>
                                <MapPin size={16} className="text-accent" style={{ marginTop: '4px' }} />
                                <span>VIT Bhopal University,<br />Bhopal-Indore Highway,<br />Kothrikalan, Sehore, Madhya Pradesh - 466114</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="quick-links">
                            <li><a href="#about">About Conference</a></li>
                            <li><a href="#registration">Registration Fees</a></li>
                            <li><a href="#submission">Submission Info</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom text-center">
                    <p>&copy; {new Date().getFullYear()} IBCD Conference | VIT Bhopal University. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
