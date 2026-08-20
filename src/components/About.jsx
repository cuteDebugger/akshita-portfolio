import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Lightweight visual SVG icons
const CodeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const DataIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);

const CreativityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"></path>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.6 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="about" className="about-section">
            <motion.div
                className="about-container container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >

                {/* LEFT COLUMN */}
                <div className="about-left">
                    <motion.div variants={itemVariants} className="section-title-wrapper">
                        <span className="section-number">01</span>
                        <h2 className="section-title">ABOUT ME</h2>
                    </motion.div>

                    <motion.div variants={itemVariants} className="decorative-visual">
                        <div className="visual-node node-1">
                            <CodeIcon />
                        </div>
                        <div className="visual-line line-1"></div>
                        <div className="visual-node node-2">
                            <DataIcon />
                        </div>
                        <div className="visual-line line-2"></div>
                        <div className="visual-node node-3">
                            <CreativityIcon />
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="about-right">
                    <motion.div variants={itemVariants} className="about-text">
                        <p>I’m a Computer Science student and developer who enjoys turning ideas into practical digital experiences. I work across frontend development, backend development, databases and machine learning, and I enjoy understanding how different technologies come together to build useful applications.</p>
                        <p>My projects have helped me explore Java, Python, React, Django, databases, machine learning and NLP. I’m continuously learning, experimenting with new technologies and improving my problem-solving skills through hands-on development.</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="info-blocks">
                        <div className="info-block">
                            <h3>Developer</h3>
                            <p>Full-stack development with Java, Python, React and Django.</p>
                        </div>
                        <div className="info-block">
                            <h3>Data & ML</h3>
                            <p>Machine learning, exploratory data analysis and NLP.</p>
                        </div>
                        <div className="info-block">
                            <h3>Problem Solver</h3>
                            <p>Interested in building practical applications and learning through projects.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="stats-row">
                        <div className="stat-item">
                            <h4 className="stat-number">5+</h4>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <h4 className="stat-number">4</h4>
                            <span className="stat-label">Certifications</span>
                        </div>
                        <div className="stat-item">
                            <h4 className="stat-number">2</h4>
                            <span className="stat-label">Programming Focus Areas</span>
                        </div>
                        <div className="stat-item">
                            <h4 className="stat-number">100%</h4>
                            <span className="stat-label">Curiosity</span>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default About;
