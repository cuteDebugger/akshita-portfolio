import React from 'react';
import Hero3D from './Hero3D';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container container">

                {/* Left Side: Text Content */}
                <div className="hero-content animate-fade-in">
                    <h2 className="hero-greeting">Hi, I'm Akshita.</h2>
                    <h1 className="hero-headline">
                        Building digital experiences with <span className="highlight-text">code, data & creativity.</span>
                    </h1>
                    <p className="hero-description">
                        Computer Science student and developer exploring full-stack development, machine learning and NLP.
                    </p>
                    <p className="hero-tech">
                        Java &bull; Python &bull; React &bull; Django &bull; ML &bull; NLP
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary">View My Work</button>
                        <button className="btn btn-secondary">Download Resume</button>
                    </div>
                </div>

                {/* Right Side: True 3D Visual */}
                <div className="hero-visual animate-fade-in">
                    <div className="canvas-wrapper">
                        <Hero3D />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
