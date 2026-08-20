import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, duration: 0.5 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const GitHubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Front-end UI only
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-background-particles">
                <div className="particle p1"></div>
                <div className="particle p2"></div>
                <div className="particle p3"></div>
                <svg className="contact-deco-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="10" y1="90" x2="90" y2="10" />
                    <line x1="90" y1="90" x2="10" y2="10" />
                </svg>
            </div>

            <motion.div
                className="contact-container container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {/* Left Side: Header & Deco */}
                <div className="contact-left">
                    <motion.div variants={itemVariants} className="section-title-wrapper">
                        <span className="section-number">06</span>
                        <h2 className="section-title">LET'S CONNECT</h2>
                    </motion.div>

                    <motion.div variants={itemVariants} className="contact-header-content">
                        <h3 className="contact-headline">Let's build something meaningful together.</h3>
                        <p className="contact-description">
                            Whether it's a project, collaboration or simply a conversation about technology, I'd love to connect.
                        </p>
                    </motion.div>

                    {/* Decorative node logic */}
                    <motion.div variants={itemVariants} className="contact-deco">
                        <div className="deco-dot"></div>
                        <div className="deco-line"></div>
                        <div className="deco-dot end"></div>
                    </motion.div>
                </div>

                {/* Right Side: Contact Card & Form */}
                <motion.div variants={itemVariants} className="contact-right">
                    <div className="contact-card">
                        <div className="contact-info-rows">

                            <a href="#" className="contact-row" onClick={e => e.preventDefault()}>
                                <div className="contact-icon"><MailIcon /></div>
                                <div className="contact-details">
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">your-email@example.com</span>
                                </div>
                            </a>

                            <a href="#" className="contact-row" onClick={e => e.preventDefault()}>
                                <div className="contact-icon"><LinkedInIcon /></div>
                                <div className="contact-details">
                                    <span className="contact-label">LinkedIn</span>
                                    <span className="contact-value">linkedin.com/in/your-profile</span>
                                </div>
                            </a>

                            <a href="#" className="contact-row" onClick={e => e.preventDefault()}>
                                <div className="contact-icon"><GitHubIcon /></div>
                                <div className="contact-details">
                                    <span className="contact-label">GitHub</span>
                                    <span className="contact-value">github.com/your-username</span>
                                </div>
                            </a>

                        </div>

                        <hr className="contact-divider" />

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
                            </div>

                            <button type="submit" className="btn-submit">Send Message</button>

                            {isSubmitted && (
                                <div className="success-ui">
                                    Thanks! Your message UI was submitted successfully.
                                </div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
