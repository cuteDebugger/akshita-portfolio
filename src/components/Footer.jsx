import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Footer.css';

const ChevronUpIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
);

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-section">
            <div className="footer-container container">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="footer-content"
                >
                    <h2 className="footer-logo">AKSHITA GUPTA</h2>
                    <p className="footer-tagline">Building digital experiences with code, data & creativity.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="footer-socials"
                >
                    <a href="https://github.com/cuteDebugger" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                    <span className="social-dot">•</span>
                    <a href="https://www.linkedin.com/in/akshita-gupta-88085a381" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                    <span className="social-dot">•</span>
                    <a href="mailto:gakshita103@gmail.com" className="social-link">Email</a>
                </motion.div>

            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-flex">
                    <p className="copyright">© 2026 Akshita Gupta</p>
                </div>
            </div>

            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        className="back-to-top"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ duration: 0.3 }}
                        aria-label="Back to Top"
                    >
                        <ChevronUpIcon />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
