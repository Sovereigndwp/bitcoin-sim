'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useAppStore } from '@/stores/app-store';
import { course } from '@/data/course-data';
import { ModuleCard } from '@/components/ui/module-card';
import { WelcomeSection } from '@/components/layout/welcome-section';
import { LearningSection } from '@/components/layout/learning-section';
import { ProgressSection } from '@/components/layout/progress-section';
import { RotateCcw } from 'lucide-react';

const Homepage: React.FC = () => {
  const { progress, resetProgress, completeModule } = useAppStore();
  const searchParams = useSearchParams();
  const [currentView, setCurrentView] = useState('welcome'); // welcome, learning, progress

  useEffect(() => {
    const viewParam = searchParams.get('view');
    if (viewParam === 'learning') {
      setCurrentView('learning');
    } else if (viewParam === 'progress') {
      setCurrentView('progress');
    }
  }, [searchParams]);

  const handleStartJourney = () => {
    completeModule('money');
    setCurrentView('learning');
  };

  const handleResetProgress = () => {
    resetProgress();
    setCurrentView('welcome');
  };

  return (
    <div className="homepage-modern">
      <header className="modern-header">
        <div className="header-content">
          <div className="logo-section">
            <span className="bitcoin-symbol">₿</span>
            <div className="logo-text">
              <h1>Learn Bitcoin by Doing</h1>
              <p>Master money and Bitcoin through interactive exploration</p>
            </div>
          </div>
          <nav className="header-nav">
            {progress.completedModules.length > 0 && (
              <button onClick={handleResetProgress} className="reset-btn-minimal">
                <RotateCcw size={16} /> Reset
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="main-content">
        {currentView === 'welcome' && (
          <WelcomeSection onStartJourney={handleStartJourney} />
        )}

        {currentView === 'learning' && (
          <LearningSection course={course} progress={progress} />
        )}

        {currentView === 'progress' && (
          <ProgressSection progress={progress} />
        )}
      </main>
    </div>
  );
};

export default Homepage;
