import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

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

const Education = () => {
    return (
        <section id="education" className="education-section">
            <motion.div
                className="education-container container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="education-header">
                    <motion.div variants={itemVariants} className="section-title-wrapper">
                        <span className="section-number">04</span>
                        <h2 className="section-title">EDUCATION</h2>
                    </motion.div>
                    <motion.h3 variants={itemVariants} className="education-headline">Learning has always been part of the journey.</motion.h3>
                </div>

                <div className="timeline-container">
                    <motion.div
                        className="timeline-line"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    ></motion.div>

                    {/* B.Tech */}
                    <motion.div variants={itemVariants} className="timeline-item featured-timeline">
                        <div className="timeline-node glow-node"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">B.Tech — Computer Science Engineering</h3>
                            <h4 className="timeline-subtitle">Ahmedabad University</h4>
                            <span className="timeline-status">Currently pursuing</span>
                        </div>
                    </motion.div>

                    {/* Class 12 */}
                    <motion.div variants={itemVariants} className="timeline-item">
                        <div className="timeline-node"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Class 12</h3>
                            <span className="timeline-score">88.3%</span>
                        </div>
                    </motion.div>

                    {/* Class 10 */}
                    <motion.div variants={itemVariants} className="timeline-item">
                        <div className="timeline-node"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Class 10</h3>
                            <span className="timeline-score">94.6%</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
