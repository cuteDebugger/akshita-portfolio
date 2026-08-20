import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './IntroScreen.css';

const IntroScreen = ({ onComplete }) => {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setReducedMotion(prefersReducedMotion);

        if (prefersReducedMotion) {
            onComplete();
            return;
        }

        document.body.style.overflow = 'hidden';

        // The intro screen should fade out revealing the Hero around 3s.
        // We'll trigger onComplete around 2.5s to start the exit transition.
        const timer = setTimeout(() => {
            document.body.style.overflow = '';
            onComplete();
        }, 2500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, [onComplete]);

    if (reducedMotion) return null; // Fallback immediately if reduced motion is enabled

    return (
        <motion.div
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Background elements replacing GLB */}
            <div className="intro-bg">
                <div className="intro-orbit"></div>
                <div className="intro-orbit reverse"></div>
                <div className="intro-particles"></div>
            </div>

            <motion.div
                className="intro-content-wrapper"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.05, opacity: 0 }}
                transition={{ delay: 2.0, duration: 0.8, ease: "easeInOut" }}
            >
                <div className="intro-content">
                    <motion.h1
                        className="intro-title"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.0, ease: "easeOut" }}
                    >
                        <span>AKSHITA</span>
                        <span>GUPTA</span>
                    </motion.h1>
                    <motion.h2
                        className="intro-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1.0, ease: "easeOut" }}
                    >
                        CODE &bull; DATA &bull; CREATIVITY
                    </motion.h2>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default IntroScreen;
