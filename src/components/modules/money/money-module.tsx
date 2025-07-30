'use client';

import React, { useState } from 'react';
import { moduleConfig, quizQuestions, moneyTraits, recapSteps } from '@/data/money-module-data';
import { ProgressBar } from '@/components/ui/progress-bar';
import { BarterStory } from '@/components/modules/money/barter-story';
import { Quiz } from '@/components/modules/money/quiz';
import { DigitalMoneyDemo } from '@/components/modules/money/digital-money-demo';
import { Recap } from '@/components/modules/money/recap';
import { TraitsScorecard } from '@/components/modules/money/traits-scorecard';

const MoneyModule: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState(0);
  const [unlockedTraits, setUnlockedTraits] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showRecap, setShowRecap] = useState(false);
  const [showTraits, setShowTraits] = useState(false);

  const handleCompleteStep = (trait?: string) => {
    setCompletedSteps((prev) => prev + 1);
    if (trait && !unlockedTraits.includes(trait)) {
      setUnlockedTraits((prev) => [...prev, trait]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold glow-orange">{moduleConfig.title}</h1>
        <h2 className="text-3xl font-semibold glow-bright text-accent-orange">{moduleConfig.subtitle}</h2>
      </div>

      <ProgressBar
        completedSteps={completedSteps}
        totalSteps={moduleConfig.totalSteps}
      />

      <BarterStory
        onComplete={() => {
          handleCompleteStep();
          setShowQuiz(true);
        }}
      />

      {showQuiz && (
        <Quiz
          questions={quizQuestions}
          onComplete={(unlocked) => {
            unlocked.forEach((trait) => handleCompleteStep(trait));
            setShowDemo(true);
          }}
        />
      )}

      {showDemo && (
        <DigitalMoneyDemo
          onComplete={() => {
            handleCompleteStep();
            setShowRecap(true);
          }}
        />
      )}

      {showRecap && (
        <Recap
          steps={recapSteps}
          onComplete={() => {
            handleCompleteStep();
            setShowTraits(true);
          }}
        />
      )}

      {showTraits && (
        <TraitsScorecard traits={moneyTraits} unlockedTraits={unlockedTraits} />
      )}
    </div>
  );
};

export default MoneyModule;
