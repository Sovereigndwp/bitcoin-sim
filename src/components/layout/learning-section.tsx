'use client';

import React from 'react';
import Link from 'next/link';
import { Module } from '@/types';
import { UserProgress } from '@/types';
import { ChevronRight, Lock, CheckCircle } from 'lucide-react';

interface LearningSectionProps {
  course: Module[];
  progress: UserProgress;
}

const moduleIcons: Record<string, string> = {
  money: '💰',
  'bitcoin-basics': '₿',
  numbers: '🔢',
  hashing: '🔐',
  mining: '⛏️',
  keys: '🔑',
  transactions: '🔄',
  scripts: '📜',
  merkle: '🌳',
  custody: '🛡️',
  lightning: '⚡',
  'advanced-topics': '🚀',
  myths: '🎭',
  'bitcoin-toolkit': '🛠️'
};

export const LearningSection: React.FC<LearningSectionProps> = ({ course, progress }) => {
  const isModuleUnlocked = (module: Module) => {
    if (module.id === 'money') {
      return progress.completedModules.length > 0;
    }
    return true; // For now, all modules unlocked
  };

  const isModuleCompleted = (moduleId: string) => {
    return progress.completedModules.includes(moduleId);
  };

  const getModuleProgress = (moduleId: string) => {
    return isModuleCompleted(moduleId) ? 100 : 0;
  };

  return (
    <section className="learning-section">
      <div className="learning-path">
        <h3>Your Learning Path</h3>
        <div className="modules-grid">
          {course.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isUnlocked={isModuleUnlocked(module)}
              progress={getModuleProgress(module.id)}
              isCompleted={isModuleCompleted(module.id)}
              icon={moduleIcons[module.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ModuleCard: React.FC<{
  module: Module;
  isUnlocked: boolean;
  progress: number;
  isCompleted: boolean;
  icon: string;
}> = ({ module, isUnlocked, progress, isCompleted, icon }) => {
  if (!isUnlocked) {
    return (
      <div className="module-card locked">
        <Lock className="lock-icon" />
        <div className="module-content">
          <h5>{module.title}</h5>
          <p className="unlock-requirement">Complete prerequisites first</p>
        </div>
      </div>
    );
  }

  return (
    <Link 
      href={`/modules/${module.id}`}
      className={`module-card ${isCompleted ? 'completed' : ''} ${progress > 0 ? 'started' : ''}`}
    >
      <div className="module-header">
        <span className="module-icon">{icon}</span>
        {isCompleted && <CheckCircle className="completed-icon" />}
      </div>
      <div className="module-content">
        <h5>{module.title}</h5>
        <p>{module.description}</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-text">{progress}% complete</span>
      </div>
    </Link>
  );
};
