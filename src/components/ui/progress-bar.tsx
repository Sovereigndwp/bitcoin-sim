import React from 'react';

interface ProgressBarProps {
  completedSteps: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ completedSteps, totalSteps }) => {
  const percentage = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

  return (
    <div className="rounded-xl p-6 bg-card shadow-xl card-hover">
      <div className="flex justify-between mb-3">
        <span className="text-sm font-medium">Progress</span>
        <span className="text-sm text-accent-gray">
          {completedSteps}/{totalSteps} Complete
        </span>
      </div>
      <div className="w-full h-3 rounded-full bg-accent-gray overflow-hidden">
        <div
          className="progress-bar h-3 rounded-full glow-orange"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
