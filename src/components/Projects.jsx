import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

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

const ExternalLinkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const TechChip = ({ name }) => (
    <span className="tech-chip">{name}</span>
);

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <motion.div
                className="projects-container container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="projects-header">
                    <div className="section-title-wrapper">
                        <span className="section-number">03</span>
                        <h2 className="section-title">SELECTED WORK</h2>
                    </div>
                    <div className="projects-header-content">
                        <h3 className="projects-headline">Things I've built<br />while learning, experimenting<br />and solving problems.</h3>
                        <p className="projects-description">
                            A selection of projects where I explored software development, data, machine learning and real-world application design.
                        </p>
                    </div>
                </motion.div>

                <div className="projects-grid">

                    {/* FEATURED: MindCompass */}
                    <motion.div variants={itemVariants} className="project-card featured-project">
                        <div className="project-content">
                            <div className="project-meta">
                                <span className="project-number">01</span>
                            </div>
                            <h3 className="project-title">MindCompass</h3>
                            <h4 className="project-subtitle">Personalized Mental Health Monitoring & Wellness Platform</h4>
                            <p className="project-desc">
                                A full-stack platform designed to help users understand their emotional patterns through mood tracking, journaling, sentiment analysis and personalized wellness recommendations.
                            </p>

                            <ul className="project-features">
                                <li>Daily mood and stress tracking</li>
                                <li>Journal sentiment analysis</li>
                                <li>Personalized wellness recommendations</li>
                                <li>Mood insights and progress analytics</li>
                            </ul>

                            <div className="tech-stack">
                                <TechChip name="React" />
                                <TechChip name="Vite" />
                                <TechChip name="Tailwind CSS" />
                                <TechChip name="Django" />
                                <TechChip name="Django REST Framework" />
                                <TechChip name="PostgreSQL" />
                                <TechChip name="Python" />
                                <TechChip name="NLP" />
                                <TechChip name="Machine Learning" />
                            </div>

                            <div className="project-actions">
                                <a href="#" className="btn-project primary" onClick={(e) => e.preventDefault()}>
                                    View Project <ExternalLinkIcon />
                                </a>
                                <a href="#" className="btn-project secondary" onClick={(e) => e.preventDefault()}>
                                    GitHub <GitHubIcon />
                                </a>
                            </div>
                        </div>

                        <div className="project-visual">
                            {/* Abstract Interface Preview */}
                            <div className="abstract-ui mindcompass-ui">
                                <div className="ui-header">
                                    <div className="ui-dot close"></div>
                                    <div className="ui-dot min"></div>
                                    <div className="ui-dot max"></div>
                                </div>
                                <div className="ui-body">
                                    <div className="ui-row">
                                        <div className="ui-box stats-box">
                                            <div className="stat-circle"></div>
                                            <div className="stat-lines">
                                                <div className="s-line full"></div>
                                                <div className="s-line half"></div>
                                            </div>
                                        </div>
                                        <div className="ui-box graph-box">
                                            <svg viewBox="0 0 100 40" className="abstract-graph">
                                                <path d="M 0 35 Q 25 5, 50 20 T 100 10" fill="none" stroke="currentColor" strokeWidth="3" />
                                                <circle cx="50" cy="20" r="4" fill="currentColor" />
                                                <circle cx="100" cy="10" r="4" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ui-row">
                                        <div className="ui-box cards-box">
                                            <div className="ui-card"></div>
                                            <div className="ui-card"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* TWO-COLUMN LOWER ROW */}
                    <div className="projects-subgrid">

                        {/* PROJECT 02: MatchMate */}
                        <motion.div variants={itemVariants} className="project-card sub-project matchmate">
                            <div className="project-meta">
                                <span className="project-number">02</span>
                            </div>
                            <h3 className="project-title">MatchMate</h3>
                            <h4 className="project-subtitle">Java-Based Matchmaking Application</h4>
                            <p className="project-desc">
                                A Java-based matchmaking application focused on user profiles, authentication, matching logic and database-driven interactions.
                            </p>

                            <ul className="project-features">
                                <li>Register & Login</li>
                                <li>Forgot Password with OTP</li>
                                <li>Profile Management</li>
                                <li>Match Discovery & Likes</li>
                            </ul>

                            <div className="tech-stack">
                                <TechChip name="Java" />
                                <TechChip name="MySQL" />
                                <TechChip name="JDBC" />
                                <TechChip name="Jakarta Mail" />
                                <TechChip name="Data Structures" />
                            </div>

                            <div className="project-visual abstract-matchmate">
                                {/* Abstract Mini UI */}
                                <div className="match-node center">
                                    <div className="m-avatar"></div>
                                </div>
                                <div className="match-link link-left"></div>
                                <div className="match-node left"></div>
                                <div className="match-link link-right"></div>
                                <div className="match-node right"></div>
                            </div>

                            <div className="project-actions">
                                <a href="#" className="btn-project primary" onClick={(e) => e.preventDefault()}>
                                    View Project <ExternalLinkIcon />
                                </a>
                                <a href="#" className="btn-project secondary" onClick={(e) => e.preventDefault()}>
                                    GitHub <GitHubIcon />
                                </a>
                            </div>
                        </motion.div>

                        {/* PROJECT 03: Skill Matrix */}
                        <motion.div variants={itemVariants} className="project-card sub-project skill-matrix">
                            <div className="project-meta">
                                <span className="project-number">03</span>
                            </div>
                            <h3 className="project-title">Skill Matrix</h3>
                            <h4 className="project-subtitle">Intelligent Skill Assessment & Company Matching Platform</h4>
                            <p className="project-desc">
                                A platform that helps users understand their technical skill profile and discover suitable companies based on their skills, interests and compatibility with job requirements.
                            </p>

                            <ul className="project-features">
                                <li>Skill assessment and skill profiling</li>
                                <li>Company matching based on user skills</li>
                                <li>Compatibility/match scoring</li>
                                <li>Personalized company recommendations</li>
                            </ul>

                            <div className="tech-stack">
                                <TechChip name="Python" />
                                <TechChip name="Flask" />
                                <TechChip name="SQLite" />
                                <TechChip name="Scikit-learn" />
                                <TechChip name="NLTK" />
                                <TechChip name="Pandas" />
                            </div>

                            <div className="project-visual abstract-skillmatrix">
                                {/* Abstract Mini UI */}
                                <div className="sm-ui">
                                    <div className="sm-header">
                                        <div className="sm-score-circle">
                                            <span>85</span>
                                            <small>Match</small>
                                        </div>
                                        <div className="sm-lines">
                                            <div className="sm-line" style={{ width: '90%' }}></div>
                                            <div className="sm-line" style={{ width: '60%' }}></div>
                                            <div className="sm-line" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>
                                    <div className="sm-cards">
                                        <div className="sm-card"></div>
                                        <div className="sm-card"></div>
                                        <div className="sm-card"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-actions">
                                <a href="#" className="btn-project primary" onClick={(e) => e.preventDefault()}>
                                    View Project <ExternalLinkIcon />
                                </a>
                                <a href="#" className="btn-project secondary" onClick={(e) => e.preventDefault()}>
                                    GitHub <GitHubIcon />
                                </a>
                            </div>
                        </motion.div>

                    </div>

                    {/* PROJECT 04: Coming Soon */}
                    <motion.div variants={itemVariants} className="project-card minimal-card full-width">
                        <div className="project-meta">
                            <span className="project-number">04</span>
                        </div>
                        <h3 className="project-title highlight">More Projects Coming Soon</h3>
                        <p className="project-desc minimal-desc">
                            I'm continuously building and experimenting with new ideas. More projects will be added here as they evolve.
                        </p>
                        <div className="minimal-visual">
                            <div className="pulse-ring"></div>
                            <div className="pulse-dot"></div>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
};

export default Projects;
