import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, duration: 0.6 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const SkillChip = ({ name }) => (
    <span className="skill-chip">{name}</span>
);

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <motion.div
                className="skills-container container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {/* TOP: Header & Constellation */}
                <div className="skills-top">
                    {/* Left: Headers */}
                    <motion.div variants={itemVariants} className="skills-header">
                        <div className="section-title-wrapper">
                            <span className="section-number">02</span>
                            <h2 className="section-title">SKILLS</h2>
                        </div>
                        <h3 className="skills-headline">Tools I use to turn<br />ideas into reality.</h3>
                        <p className="skills-description">
                            A growing toolkit shaped by projects, experimentation and continuous learning.
                        </p>
                    </motion.div>

                    {/* Right: Constellation */}
                    <motion.div variants={itemVariants} className="skills-constellation">
                        <svg className="constellation-lines" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <line x1="200" y1="200" x2="200" y2="40" className="c-line" />
                            <line x1="200" y1="200" x2="60" y2="120" className="c-line" />
                            <line x1="200" y1="200" x2="340" y2="120" className="c-line" />
                            <line x1="200" y1="200" x2="60" y2="280" className="c-line" />
                            <line x1="200" y1="200" x2="340" y2="280" className="c-line" />
                            <line x1="200" y1="200" x2="200" y2="360" className="c-line" />

                            {/* Outer Connections */}
                            <line x1="200" y1="40" x2="340" y2="120" className="c-line faint" />
                            <line x1="340" y1="120" x2="340" y2="280" className="c-line faint" />
                            <line x1="60" y1="120" x2="60" y2="280" className="c-line faint" />
                        </svg>

                        <div className="c-node center-node">CODE</div>

                        <div className="c-node node-pos-1">Python</div>
                        <div className="c-node node-pos-2">Java</div>
                        <div className="c-node node-pos-3">React</div>
                        <div className="c-node node-pos-4">SQL</div>
                        <div className="c-node node-pos-5">Django</div>
                        <div className="c-node node-pos-6">NLP</div>
                    </motion.div>
                </div>

                {/* MIDDLE: Category Cards */}
                <div className="category-cards">
                    {/* Card 1 */}
                    <motion.div variants={itemVariants} className="category-card">
                        <div className="card-header">
                            <span className="cat-number">01</span>
                            <h4>PROGRAMMING</h4>
                        </div>
                        <p className="cat-desc">Building logic and solving problems with core programming languages.</p>
                        <div className="chip-container">
                            <SkillChip name="Java" /> <SkillChip name="Python" /> <SkillChip name="JavaScript" /> <SkillChip name="SQL" />
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={itemVariants} className="category-card">
                        <div className="card-header">
                            <span className="cat-number">02</span>
                            <h4>FRONTEND</h4>
                        </div>
                        <p className="cat-desc">Crafting responsive and interactive user interfaces and experiences.</p>
                        <div className="chip-container">
                            <SkillChip name="HTML" /> <SkillChip name="CSS" /> <SkillChip name="React" /> <SkillChip name="Vite" /> <SkillChip name="Tailwind CSS" />
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={itemVariants} className="category-card">
                        <div className="card-header">
                            <span className="cat-number">03</span>
                            <h4>BACKEND & DATABASE</h4>
                        </div>
                        <p className="cat-desc">Designing robust APIs, data architectures, and managing server logic.</p>
                        <div className="chip-container">
                            <SkillChip name="Django" /> <SkillChip name="Django REST Framework" /> <SkillChip name="MySQL" /> <SkillChip name="PostgreSQL" /> <SkillChip name="MongoDB" />
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div variants={itemVariants} className="category-card">
                        <div className="card-header">
                            <span className="cat-number">04</span>
                            <h4>DATA & MACHINE LEARNING</h4>
                        </div>
                        <p className="cat-desc">Extracting insights and building predictive or textual analysis models.</p>
                        <div className="chip-container">
                            <SkillChip name="Machine Learning" /> <SkillChip name="NLP" /> <SkillChip name="Sentiment Analysis" /> <SkillChip name="Exploratory Data Analysis" /> <SkillChip name="Scikit-learn" /> <SkillChip name="Pandas" /> <SkillChip name="NumPy" />
                        </div>
                    </motion.div>
                </div>

                {/* BOTTOM: Learning Indicator */}
                <motion.div variants={itemVariants} className="learning-indicator">
                    <h4 className="learning-title">CURRENTLY LEARNING</h4>
                    <div className="learning-topics">
                        <div className="learning-item">
                            <span className="learning-text">Advanced React</span>
                            <div className="progress-bar">
                                <motion.div
                                    className="progress-fill"
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: ['0%', '100%', '0%'], opacity: [0, 1, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                />
                            </div>
                        </div>
                        <div className="learning-item">
                            <span className="learning-text">Machine Learning</span>
                            <div className="progress-bar">
                                <motion.div
                                    className="progress-fill"
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: ['0%', '100%', '0%'], opacity: [0, 1, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 1 }}
                                />
                            </div>
                        </div>
                        <div className="learning-item">
                            <span className="learning-text">Full-Stack Development</span>
                            <div className="progress-bar">
                                <motion.div
                                    className="progress-fill"
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: ['0%', '100%', '0%'], opacity: [0, 1, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Skills;
