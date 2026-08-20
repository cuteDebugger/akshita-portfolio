import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

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

const DiagonalArrowIcon = () => (
    <svg className="cert-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

const CertCard = ({ num, title, org, platform, link }) => (
    <motion.a variants={itemVariants} href={link} target="_blank" rel="noopener noreferrer" className="cert-card">
        <div className="cert-card-top">
            <span className="cert-number">{num}</span>
            <DiagonalArrowIcon />
        </div>
        <div className="cert-card-body">
            <h3 className="cert-title">{title}</h3>
            <div className="cert-meta">
                <span className="cert-org">{org}</span>
                <span className="cert-platform">{platform}</span>
                <span className="cert-link-text">View Certificate ↗</span>
            </div>
        </div>
    </motion.a>
);

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">
            <motion.div
                className="cert-container container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="cert-header">
                    <motion.div variants={itemVariants} className="section-title-wrapper">
                        <span className="section-number">05</span>
                        <h2 className="section-title">CERTIFICATIONS</h2>
                    </motion.div>
                    <motion.div variants={itemVariants} className="cert-header-content">
                        <h3 className="cert-headline">Learning beyond the classroom.</h3>
                        <p className="cert-description">
                            Courses and certifications that helped me strengthen my foundations in programming, data and machine learning.
                        </p>
                    </motion.div>
                </div>

                <div className="cert-grid">
                    <CertCard
                        num="01"
                        title="Introduction to Object-Oriented Programming with Java"
                        org="LearnQuest"
                        platform="Coursera"
                        link="/certificates/java.pdf"
                    />
                    <CertCard
                        num="02"
                        title="Inheritance and Data Structures in Java"
                        org="University of Pennsylvania"
                        platform="Coursera"
                        link="/certificates/java-dsa.pdf"
                    />
                    <CertCard
                        num="03"
                        title="Crash Course on Python"
                        org="Google"
                        platform="Coursera"
                        link="/certificates/html-css-js.pdf"
                    />
                    <CertCard
                        num="04"
                        title="Exploratory Data Analysis for Machine Learning"
                        org="IBM"
                        platform="Coursera"
                        link="/certificates/ml-eda.pdf"
                    />
                </div>
            </motion.div>
        </section >
    );
};

export default Certifications;
