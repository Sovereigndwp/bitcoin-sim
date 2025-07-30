'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeSectionProps {
  onStartJourney: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onStartJourney }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="welcome-section text-center"
  >
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-icon">
          <div className="sound-money-circle">
            <div className="inner-circle"></div>
          </div>
        </div>
        <h1 className="hero-title">
          Discover <span className="gradient-text">Sound Money</span>
        </h1>
        <p className="hero-description">
          Journey through the most important financial discovery of our time.
        </p>
        <p className="hero-subtitle">
          <span className="highlight-text">
            Question everything you thought you knew about money.
          </span>
        </p>
        <button onClick={onStartJourney} className="hero-cta-button">
          Begin Your Discovery
        </button>
      </div>
    </div>
  </motion.section>
);
