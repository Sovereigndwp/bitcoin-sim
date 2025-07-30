'use client';

import React from 'react';
import { UserProgress } from '@/types';
import { Trophy, Target, Award, Brain, Play, Star } from 'lucide-react';

interface ProgressSectionProps {
  progress: UserProgress;
  setCurrentView?: (view: string) => void;
}

export const ProgressSection: React.FC<ProgressSectionProps> = ({ progress, setCurrentView }) => {
  if (progress.completedModules.length === 0) {
    return (
      <section className="progress-section">
        <div className="progress-header">
          <h3>Ready to Start Learning?</h3>
          <p>Your learning journey hasn't begun yet. Track your progress here as you explore Bitcoin!</p>
        </div>
        <div className="getting-started">
          <div className="start-info">
            <Brain size={48} />
            <h4>Your Journey Awaits</h4>
            <p>Complete modules to unlock achievements and track your Bitcoin mastery.</p>
            {setCurrentView && (
              <button
                className="start-learning-btn"
                onClick={() => setCurrentView('learning')}
              >
                <Play size={20} />
                Start Learning
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="progress-section">
      <div className="progress-header">
        <h3>Your Learning Progress</h3>
        <div className="overall-stats">
          <div className="stat-card">
            <Trophy size={24} />
            <div className="stat-info">
              <span className="stat-number">{progress.completedModules.length}</span>
              <span className="stat-label">Modules Completed</span>
            </div>
          </div>
          <div className="stat-card">
            <Target size={24} />
            <div className="stat-info">
              <span className="stat-number">{progress.completedSteps}/{progress.totalSteps}</span>
              <span className="stat-label">Overall Progress</span>
            </div>
          </div>
          <div className="stat-card">
            <Award size={24} />
            <div className="stat-info">
              <span className="stat-number">{progress.unlockedTraits.length}</span>
              <span className="stat-label">Achievements</span>
            </div>
          </div>
        </div>
      </div>

      <div className="achievements-section">
        <h4>Your Achievements</h4>
        <div className="achievements-grid">
          {progress.unlockedTraits.length > 0 ? (
            progress.unlockedTraits.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <Star className="achievement-icon" />
                <span className="achievement-name">{achievement}</span>
              </div>
            ))
          ) : (
            <div className="no-achievements">
              <Award size={32} />
              <p>Complete modules to earn achievements!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
